from datetime import date
from fastapi import APIRouter, status, Path
from sqlalchemy.orm  import Session
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from schemas.user import UserCreate, ListUser, UserResponse, TokenSchema,TokenPayload, LoginCredentials
from schemas.goals import DailyGoalCreate, DailyGoalResponse, MonthlyGoalCreate, MonthlyGoalResponse
from session import get_db
from repository.user import get_all_users, get_user_by_email
from repository.goals import get_monthly_goal, get_daily_goal
from model.models import User, DailyGoal, MonthlyGoal
from typing import List
from hashing import Hasher
from utils import create_access_token, create_refresh_token
from datetime import timedelta
from datetime import datetime

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@router.get("/users/", response_model=List[ListUser])
def get_user(db: Session=Depends(get_db)):
    users = get_all_users(db)
    list_users = [ListUser(id=user.id, email=user.email, is_active=user.is_active) for user in users]
    return list_users


@router.post("/create-user/", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    if user.password != user.confirm_password:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password and confirm Password should match"
        )
    existing_user = get_user_by_email(user.email, db)
    if existing_user is not None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exists"
        )
    db_user = User(
        email=user.email,
        password=Hasher.get_password_hash(user.password),
        username=user.username
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    respose_user = UserResponse(
        id = db_user.id,
        email=db_user.email,
        username=db_user.username
    )
    return respose_user

@router.post('/login', summary="Create access and refresh tokens for user", response_model=TokenSchema)
def login(credentials: LoginCredentials, db: Session = Depends(get_db)):
    user = get_user_by_email(credentials.email, db)
    if not user or not Hasher.verify_password(credentials.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorect email or password"
        )
    access_token_expires = timedelta(minutes=15)
    refresh_token_expires = timedelta(days=7)

    access_token = create_access_token(subject=user.email, expires_delta=access_token_expires)
    refresh_token = create_refresh_token(subject=user.email, expires_delta=refresh_token_expires)
    user_token = TokenPayload(sub=user.email, exp=access_token_expires.seconds), access_token, refresh_token
    token_payload = {
        "token_payload": user_token,
        "access_token": access_token,
        "refresh_token": refresh_token
    }
    return token_payload


@router.post("/daily-goals/", response_model=DailyGoalResponse)
def create_daily_goal(daily_goal: DailyGoalCreate, db: Session = Depends(get_db)):
    db_daily_goal = DailyGoal(
        user_id=daily_goal.user_id,
        goal1=daily_goal.goal1,
        goal2=daily_goal.goal2,
        goal3=daily_goal.goal3,
        goal4=daily_goal.goal4,
        goal5=daily_goal.goal5,
        created_at=datetime.now().date())
    db.add(db_daily_goal)
    db.commit()
    db.refresh(db_daily_goal)
    return db_daily_goal

@router.get("/daily_goals/{user_id}/created_at/",response_model=DailyGoalResponse)
def get_monthly_goals(user_id:int, created_at: date,  db: Session = Depends(get_db)):
    daily_goal = get_daily_goal(db, user_id, created_at)
    if daily_goal is None:
        raise HTTPException(status_code=404, detail="Daily goal not found")
    return daily_goal

@router.post("/monthly-goals/", response_model=MonthlyGoalResponse)
def create_monthly_goal(monthly_goal: MonthlyGoalCreate, db: Session = Depends(get_db)):
    db_monthly_goal = MonthlyGoal(
        user_id=monthly_goal.user_id,
        goal1=monthly_goal.goal1,
        goal2=monthly_goal.goal2,
        goal3=monthly_goal.goal3,
        goal4=monthly_goal.goal4,
        goal5=monthly_goal.goal5,
        created_at=datetime.now().date())
    db.add(db_monthly_goal)
    db.commit()
    db.refresh(db_monthly_goal)
    return db_monthly_goal


@router.get("/monthly_goals/{user_id}",response_model=List[MonthlyGoalResponse])
def get_monthly_goals(user_id:int, db: Session = Depends(get_db)):
    
    monthly_goal = get_monthly_goal(db, user_id)
    if monthly_goal is None:
        raise HTTPException(status_code=404, detail="Monthly goal not found")
    return [
        MonthlyGoalResponse(
            id= goal.id,
            user_id=goal.user_id,
            goal1=goal.goal1,
            goal2=goal.goal2,
            goal3=goal.goal3,
            goal4=goal.goal4,
            goal5=goal.goal5,
            created_at=goal.created_at
        )
        for goal in monthly_goal
    ]

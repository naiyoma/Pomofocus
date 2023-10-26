from fastapi import APIRouter, status
from sqlalchemy.orm  import Session
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer

from schemas.user import UserCreate, ListUser, UserResponse
from session import get_db
from repository.user import get_all_users, get_user_by_email
from model.models import User
from typing import List, Annotated
from hashing import Hasher

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")



@router.get("/users/", response_model=List[ListUser])
def get_user(db: Session=Depends(get_db)):
    users = get_all_users(db)
    list_users = [ListUser(id=user.id, email=user.email, is_active=user.is_active) for user in users]
    return list_users

@router.post("/create-user/", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    # import pdb; pdb.set_trace()
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
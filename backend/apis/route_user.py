from fastapi import APIRouter
from sqlalchemy.orm  import Session
from fastapi import Depends

from schemas.user import UserCreate
from session import get_db
from repository.user import create_new_user, get_all_users
from model.models import User
from typing import List

router = APIRouter()

@router.post("/create-user")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    user = create_new_user(user=user,db=db)
    return user

# @router.get("/users/", response_model=List[User])
# def get_user(db: Session = Depends(get_db)):
#     users = get_all_users(db)
#     return users
from fastapi import APIRouter, status
from sqlalchemy.orm  import Session
from fastapi import Depends

from schemas.user import UserCreate, ListUser
from session import get_db
from repository.user import create_new_user, get_all_users
from model.models import User
from typing import List

router = APIRouter()

@router.post("/create-user")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    user = create_new_user(user=user,db=db)
    return user

# @router.get("/users/", response_model=ListUser)
# def get_user(db: Session = Depends(get_db)):
#     users = get_all_users(db)
#     import pdb; pdb.set_trace()
#     return users

@router.get("/users/", response_model=List[ListUser])
def get_user(db: Session=Depends(get_db)):
    users = get_all_users(db)
    list_users = [ListUser(id=user.id, email=user.email, is_active=user.is_active) for user in users]
    return list_users
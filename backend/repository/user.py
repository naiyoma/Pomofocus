from sqlalchemy.orm import Session

from schemas.user import UserCreate
from model.models import User
from typing import List
from fastapi import FastAPI, status, HTTPException
from fastapi.responses import RedirectResponse

from hashing import Hasher


def get_all_users(db: Session) -> List[User]:
    return db.query(User).all()

def get_user_by_email(email: str, db: Session) -> User:
    return db.query(User).filter(User.email == email).first()


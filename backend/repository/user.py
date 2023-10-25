from sqlalchemy.orm import Session

from schemas.user import UserCreate
from model.models import User
from typing import List


from hashing import Hasher

def create_new_user(user:UserCreate, db:Session):
    user = User(
        email = user.email,
        password=Hasher.get_password_hash(user.password),
        phone_number=user.phone_number,
        confirm_password=user.confirm_password,
        username=user.username,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def get_all_users(db: Session) -> List[User]:
    return db.query(User).all()
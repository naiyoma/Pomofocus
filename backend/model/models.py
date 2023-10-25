from datetime import datetime
from sqlalchemy import Column, Integer, Text, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from base_class import Base


class User(Base):
    id = Column(Integer, primary_key=True)
    phone_number = Column(Integer, nullable=True)
    email = Column(String, nullable=True)
    password = Column(String, nullable=True)
    confirm_password = Column(String, nullable=True)
    username = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.now)
    is_active = Column(Boolean, default=False)
    is_superuser = Column(Boolean(), default=False)
    


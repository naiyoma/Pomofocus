from datetime import datetime
from sqlalchemy import Column, Integer, Text, String, Boolean, DateTime, ForeignKey, Date
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
    
    daily_goals = relationship('DailyGoal', back_populates='user')
    monthly_goals = relationship('MonthlyGoal', back_populates='user')

class DailyGoal(Base):
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    goal1 = Column(String, nullable=True)
    goal2 = Column(String, nullable=True)
    goal3 = Column(String, nullable=True)
    goal4 = Column(String, nullable=True)
    goal5 = Column(String, nullable=True)
    created_at = Column(Date, default=datetime.now().date())
    
    user = relationship('User', back_populates='daily_goals')


class MonthlyGoal(Base):
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    goal1 = Column(String, nullable=True)
    goal2 = Column(String, nullable=True)
    goal3 = Column(String, nullable=True)
    goal4 = Column(String, nullable=True)
    goal5 = Column(String, nullable=True)
    created_at = Column(Date, default=datetime.now().date())
    
    user = relationship('User', back_populates='monthly_goals')


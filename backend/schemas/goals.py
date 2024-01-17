from pydantic import BaseModel
from datetime import datetime

class DailyGoalCreate(BaseModel):
    user_id: int
    goal1: str
    goal2: str
    goal3: str
    goal4: str
    goal5: str

class DailyGoalResponse(BaseModel):
    id: int
    user_id: int
    goal1: str
    goal2: str
    goal3: str
    goal4: str
    goal5: str
    created_at: datetime

    class Config:
        orm_mode = True


class MonthlyGoalCreate(BaseModel):
    user_id: int
    goal1: str
    goal2: str
    goal3: str
    goal4: str
    goal5: str

class MonthlyGoalResponse(BaseModel):
    id: int
    user_id: int
    goal1: str
    goal2: str
    goal3: str
    goal4: str
    goal5: str
    created_at: datetime

    class Config:
        orm_mode = True

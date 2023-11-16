from datetime import date
from sqlalchemy.orm import Session

from model.models import DailyGoal, MonthlyGoal
from typing import List


def get_monthly_goal(db: Session, user_id: int):
    return db.query(MonthlyGoal).filter(MonthlyGoal.user_id == user_id).first()


def get_daily_goal(db: Session, user_id: int, created_at: date):
    import pdb; pdb.set_trace()
    return db.query(DailyGoal).filter(
        DailyGoal.user_id == user_id,
        DailyGoal.created_at == created_at
        ).first()


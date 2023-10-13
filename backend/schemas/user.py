from pydantic import BaseModel, EmailStr, Field

class UserCreate(BaseModel):
    email : EmailStr
    password : str = Field(..., min_length=4)
    phone_number: int 
    confirm_password: str = Field(..., min_length=4)
    username: str = Field(..., min_length=4)
        
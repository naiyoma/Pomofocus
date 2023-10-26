from pydantic import BaseModel, EmailStr, Field

class UserCreate(BaseModel):
    email : EmailStr
    password : str = Field(..., min_length=4)
    confirm_password: str = Field(..., min_length=4)
    username: str = Field(..., min_length=4)

class UserResponse(BaseModel):
    id: int
    email: str
    username: str

    class COnfig():
        orm_mode = True

class ListUser(BaseModel):
    id: int
    email: EmailStr
    is_active: bool

    class Config():
        orm_mode = True


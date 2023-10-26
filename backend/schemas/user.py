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

class TokenSchema(BaseModel):
    access_token: str
    refresh_token: str

class TokenPayload(BaseModel):
    sub: str = None
    exp: int = None
    
class LoginCredentials(BaseModel):
    email: EmailStr
    password: str
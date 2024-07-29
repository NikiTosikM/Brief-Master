from typing import Optional
from pydantic import BaseModel

from fastapi_users import schemas
from pydantic import EmailStr


class UserRead(schemas.BaseUser[int]):
    pass 


class UserCreate(schemas.BaseUserCreate):
    name_user: str
    last_name: str
    email: str
    password: str
    is_active: Optional[bool] = True
    is_superuser: Optional[bool] = False
    is_verified: Optional[bool] = False


class UserUpdate(schemas.BaseUserUpdate):
    pass


class Value(BaseModel):
    text: str 
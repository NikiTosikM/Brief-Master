from fastapi import FastAPI, Request, staticfiles
from fastapi.templating import Jinja2Templates
from fastapi import FastAPI
from fastapi_users import FastAPIUsers
from fastapi.middleware.cors import CORSMiddleware

from schemas import UserCreate, UserRead, Value

import uvicorn

from models import User

from core import request_chat_gpt, get_user_manager

from strategy import auth_backend



app = FastAPI()

origins = [
    "http://localhost:5173" 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)

@app.post("/reduction")
def reduction(value_text: Value):
    result = request_chat_gpt(value_text.model_dump()["text"])

    return result


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
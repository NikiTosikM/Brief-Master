import g4f

import aspose.words as aw

from database import async_engine, async_session

from models import Base, User

from typing import Optional
from typing import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession

from fastapi import Depends, Response
from fastapi_users.db import SQLAlchemyUserDatabase
from fastapi import Depends, Request
from fastapi_users import BaseUserManager, UUIDIDMixin

import uuid




def request_chat_gpt(text):
    try:
        result_request = g4f.ChatCompletion.create(
        model=g4f.models.gpt_35_turbo,
        messages=[{"role": "user", "content": f"Сократи текст '{text}' "}],
        ) 
    
        return create_word_document(result_request)
    except:
        return {"status": 'error', "result_request": "Произошла ошибка , пожалуйста , повторите запрос"}


def create_word_document(text):
    try:
        doc = aw.Document()
        builder = aw.DocumentBuilder(doc)
        builder.write(text)
        doc.save(r"C:\Users\user\Downloads\abstract.docx")

        return {"status": 'ok', "result_request": "Файл загружен !"}
    except: 
        {"status": 'error', "result_request": "Произошла ошибка , пожалуйста , повторите запрос"}


async def create_db_and_tables():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        yield session


async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)


SECRET = "SECRET"


class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET

    async def on_after_register(self, user: User, request: Optional[Request] = None):
        return {"status": "Пользователь зарегистрирован"}

    async def on_after_forgot_password(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        print(f"User {user.id} has forgot their password. Reset token: {token}")

    async def on_after_request_verify(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        print(f"Verification requested for user {user.id}. Verification token: {token}")
        
    async def on_after_login(
        self,
        user: User,
        request: Optional[Request] = None,
        response: Optional[Response] = None,
    ):
        print(f"{user.name_user} вошел в систему !")

async def get_user_manager(user_db=Depends(get_user_db)):
    yield UserManager(user_db)

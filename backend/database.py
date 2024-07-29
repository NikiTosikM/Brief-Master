from fastapi import Depends

from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker

from sqlalchemy.orm import DeclarativeBase, sessionmaker

import asyncio



DATABASE_URL = "postgresql+asyncpg://postgres:2004@localhost:5432/Brief-Master"


engine = create_engine(DATABASE_URL)
async_engine = create_async_engine(DATABASE_URL)
async_session = async_sessionmaker(async_engine)


class Base(DeclarativeBase):
    pass



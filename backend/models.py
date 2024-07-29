from typing import List

from fastapi_users.db import SQLAlchemyBaseUserTable

from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Boolean, Integer, ForeignKey
from sqlalchemy.orm import DeclarativeBase, relationship


class Base(DeclarativeBase):
    pass


class User(SQLAlchemyBaseUserTable[int], Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name_user: Mapped[str] = mapped_column(String(length=100), nullable=False)
    last_name: Mapped[str] = mapped_column(String(length=100), nullable=False)
    email: Mapped[str] = mapped_column(
            String(length=320), unique=True, index=True, nullable=False)
    hashed_password: Mapped[str] = mapped_column(
            String(length=1024), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    is_superuser: Mapped[bool] = mapped_column(
            Boolean, default=False, nullable=False)
    is_verified: Mapped[bool] = mapped_column(
            Boolean, default=False, nullable=False)
    abstracts: Mapped[List["Abstracts"] | None] = relationship(back_populates="user_model")


class Abstracts(Base): 
    __tablename__ = "abstract"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    user_model: Mapped["User"] = relationship(back_populates="abstracts")
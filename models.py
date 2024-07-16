from pydantic import BaseModel, Field


class Value(BaseModel):
    text: str 
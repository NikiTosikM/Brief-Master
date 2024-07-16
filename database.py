from sqlalchemy import create_engine, text


engine = create_engine(
    "postgresql+psycopg://postgres:2004@localhost:5432/Brief-Master"
)


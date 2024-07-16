from fastapi import FastAPI, Request, staticfiles
from fastapi.templating import Jinja2Templates

import uvicorn

from models import Value

from core import request_chat_gpt


app = FastAPI()

templates = Jinja2Templates(directory="frontend/templates")
app.mount("/imgs", staticfiles.StaticFiles(directory="frontend"), name='images')


@app.get("/")
def main_page(request: Request):
    return templates.TemplateResponse("main.html", {"request": request})

@app.post("/reduction")
def reduction(value_text: Value):
    result = request_chat_gpt(value_text.model_dump()["text"])

    return result



if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
from fastapi import FastAPI, Request, staticfiles
from fastapi.templating import Jinja2Templates

import uvicorn

from models import Value

from core import request_chat_gpt


app = FastAPI()

templates = Jinja2Templates(directory="frontend/templates")
app.mount("/imgs", staticfiles.StaticFiles(directory="frontend"), name='images')


@app.get("/")
def main_page(request: Request):
    return templates.TemplateResponse("main.html", {"request": request})

@app.post("/reduction")
def reduction(value_text: Value):
    result = request_chat_gpt(value_text.model_dump()["text"])

    return result



if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
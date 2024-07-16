import g4f

import aspose.words as aw

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

        return {"status": 'ok', "result_request": "Конспект сформирован и загружен"}
    except: 
        {"status": 'error', "result_request": "Произошла ошибка , пожалуйста , повторите запрос"}



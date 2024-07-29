import Account_Button from "../account button/account_button"
import TextArea_Sending from "../form_sending/form_sending"
import Status_Request from "../container_status/container_status"
import Button_Summarize from "../button_summarize/button_sumarize"

import "./main.css"

import { useState } from "react"


export default function Main_Section() {
    const [content, setContent] = useState("");
    const [contextStatus, setStatusRequest] = useState("");

    function request_status_container(data, component, setStatusRequest) {
        let remove_class;
        let add_class;
        if (data['status'] === "ok") {
            remove_class = "error_status";
            add_class = "ok_status";
        } else {
            remove_class = "ok_status";
            add_class = "error_status";
        }

        component.classList.remove(remove_class);
        component.classList.add(add_class);
        setStatusRequest(data['result_request']);
        component.style.display = "block";
        setTimeout(() => {
            component.style.display = "none";
        }, 3000);
    }

    return (
        <main className="main">
            <div className="main__container ">
                <Account_Button />
                <div className="container__form__sending">
                    <TextArea_Sending values={[content, setContent]} />
                    <Status_Request contentStatus={contextStatus} />
                </div>
                <Button_Summarize
                    content={content}
                    request_status_container={request_status_container}
                    component={document.querySelector('.container__status')}
                    setStatusRequest={setStatusRequest}
                />
            </div>
        </main>
    );
}
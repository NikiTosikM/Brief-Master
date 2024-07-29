import { useState } from "react"
import "./form_sending.css"


export default function TextArea_Sending(props) {
    let set_status_context = props.values[1]

    function change_field_text(event) {
        set_status_context(event.target.value);
    }

    return (
        <textarea
            className="form__sending"
            placeholder="Your Text"
            name="form__sending"
            value={props.values[0]}
            onChange={change_field_text}
        ></textarea>
    );
}
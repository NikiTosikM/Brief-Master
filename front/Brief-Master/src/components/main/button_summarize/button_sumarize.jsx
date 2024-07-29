import "./button_sumarize.css"


export default function Button_Summarize(props) {
    function send_text(value_field) {
        fetch("http://127.0.0.1:8000/reduction/", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ text: value_field })
        })
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }
        })
        .then(data => {
            props.request_status_container(data, props.component, props.setStatusRequest);
        })
        .catch(error => {
            console.log(error);
        });
    }

    function handle_click() {
        let value_field = props.content;
        send_text(value_field);
    }

    return (
        <button 
            className="button__summarize" 
            onClick={handle_click} 
            name="button__summarize">
            Summarize
        </button>
    );
}
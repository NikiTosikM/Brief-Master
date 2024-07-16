var text_field = document.querySelector(".form__sending");
var button_summarize = document.querySelector(".button__summarize");
var div_status = document.querySelector(".container__status")


button_summarize.addEventListener("click", () => {
    let value_text_field = text_field.value;

    fetch(
        "http://127.0.0.1:8000/reduction/", {
            method: "POST",
            headers : {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({text: value_text_field})
        }
    )
    .then (responce => {
        if (responce.ok) {
            result = responce.json()
        }

        return result
    })
    .then ( data => {
        request_status_container(data)
    })
    .catch ( error => {
        console.log(error)
    })
});


function request_status_container (data) {
    let remove_class;
    let add_class;
    if (data['status'] == "ok") {
        remove_class = "error_status";
        add_class = "ok_status"
    }
    else {
        remove_class = "ok_status"
        add_class = "error_status"
    };

    div_status.classList.remove("error_status");
    div_status.classList.add("ok_status");

    div_status.textContent = data['result_request'];
    div_status.style.display = "block";

    setTimeout(() => {
        div_status.style.display = "none"
    }, 3000)
};

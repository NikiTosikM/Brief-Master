export default function Register_Button(props){
    let name = props.name;
    let lastname = props.lastname;
    let email = props.email;
    let password = props.password; 

    function request_register(
        name_value, lastname_value,
        email_value, password_value) {
        fetch("http://127.0.0.1:8000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(
                {
                    "email": email_value,
                    "password": password_value,
                    "name_user": name_value,
                    "last_name": lastname_value
                }
            )
        })
        .then(responce => {
            return responce.json();
        })
        .then(data => {
            let text_status = "id" in data ? "Пользователь создан" : data["detail"];

            props.setTextStatus(text_status);
            props.component.style.display = "block";
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <button className="button__create-account"
        onClick={() => request_register(name, lastname, email, password)}>
            Create account
        </button>
    )
}



export default function Login_Button(props) {
    let email = props.email
    let password = props.password 

    function request_login(email_value, password_value) {
        fetch("http://127.0.0.1:8000/auth/jwt/login", {
            method: "POST",
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(
                {
                    "username": email_value,
                    "password": password_value
                }
            )
        })
        .then(response => {
            if (response.status === 204) {
                return ""
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            let text_status = data ? "Неверный пароль или логин" : "Успешный вход";
            
            props.setTextStatus(text_status);
            props.component.style.display = "block";
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <button className="button__login" 
        name="login__button"
        onClick={() => {request_login(email, password)}}>
            Login
        </button>
    )
}
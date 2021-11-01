import {useEffect} from "react";

function Register() {
    useEffect(() => {
        if (localStorage.getItem('darkMode') === undefined) {
            localStorage.setItem('darkMode', "true")
        }
    })
    return (
        <div>
            register
        </div>
    );
}

export default Register;
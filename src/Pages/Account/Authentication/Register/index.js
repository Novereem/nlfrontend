import {useEffect} from "react";
import TextFields from "../Register/Components/TextFields";

function Register() {
    useEffect(() => {
        if (localStorage.getItem('darkMode') === undefined) {
            localStorage.setItem('darkMode', "true")
        }
    })
    return (
        <div>
            <TextFields/>
        </div>
    );
}

export default Register;
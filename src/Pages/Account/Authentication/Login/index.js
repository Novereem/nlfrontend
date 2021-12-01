import {useEffect} from "react";
import TextFields from "./Components/TextFields";

function Login() {
    useEffect(() => {
        if (localStorage.getItem('darkMode') === undefined) {
            localStorage.setItem('darkMode', "true")
        }
    })
    return (
        <div style={{marginTop: "60px"}}>
            <TextFields/>
        </div>
    );
}

export default Login;
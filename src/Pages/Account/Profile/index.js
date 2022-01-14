import {useEffect} from "react";
import Main from "./Components/Main";

function Account() {
    useEffect(() => {
        if (localStorage.getItem('darkMode') === undefined) {
            localStorage.setItem('darkMode', "true")
        }
    })
    return (
        <div>
            <Main/>
        </div>
    );
}

export default Account;

import {useState} from "react";
import axios from "axios";
import {Link, PrimaryButton, TextField} from "@fluentui/react";
import * as React from "react";
import {useHistory} from "react-router-dom";

function TextFields() {
    const[email, setEmail] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const api = axios.create({
        baseURL: "http://localhost:5000"
    })

    let history = useHistory();

    function handleClick(target) {
        history.push("/" + target)
    }

    function submit(){
        api.post("/account/register", {
            email: email,
            username: username,
            password: password
        }).then(response => { console.log(response.data) })
    }

    function handleUserName(e) {
        setUsername(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <div className={"TextField"}>
            <div> Gebruikersnaam<br/>
                <input className={"text"} placeholder="Gebruikersnaam" onChange={handleUserName}/>
            </div>
            <div> Email<br/>
                <input className={"text"} placeholder="Email" onChange={handleEmail}/>
            </div>
            <div> Wachtwoord<br/>
                <input className={"text"} placeholder="Wachtwoord" onChange={handlePassword}/>
            </div>
            <div className={"inline"}>
            Heb je al een account? Log {' '}
            <div className={"inline, link"} onClick={() => handleClick("login")}>
            hier
            </div>
                in
            </div>
            <br/>
            <button className={"button"} onClick={submit}>Registreer</button>
        </div>
    )
}

export default TextFields;
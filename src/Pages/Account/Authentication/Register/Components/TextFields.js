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

    return (
        <div className={"TextField"}>
            <TextField className={"input"} placeholder="Email" onChange={(e, value) => setEmail(value)}/>
            <TextField className={"input"} placeholder="Gebruikersnaam" onChange={(e, value) => setPassword(value)}/>
            <TextField className={"input"} placeholder="Wachtwoord" onChange={(e, value) => setUsername(value)}/>
            <br/>
            <div className={"content"}>
                Heb je al een account? Log {' '}
                <div className={"content"} onClick={() => handleClick("login")}>
                    hier
                </div>
                {' '} in
            </div>
            <br/>
            <br/>
            <PrimaryButton onClick={submit}>Login</PrimaryButton>
        </div>
    )
}

export default TextFields;
import * as React from 'react';
import {PrimaryButton, TextField} from '@fluentui/react';
import './TextFields.css';
import {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

function TextFields() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const api = axios.create({
        baseURL: "http://localhost:5000"
    })

    let history = useHistory();

    function handleClick(target) {
        history.push("/" + target)
    }

    function submit() {
        api.post("/account/login", {
            username: username,
            password: password
        }).then(response => {
            localStorage.setItem('token', response.data)
            history.push("/")
            window.location.reload();
        })
    }

    function handleUserName(e) {
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <div className={"TextField"}>
            <div>
                <div>Gebruikersnaam</div>
                <input type={"text"} placeholder="Gebruikersnaam" onChange={handleUserName}/>
            </div>
            <div className={"content"}>
                <div>Wachtwoord</div>
                <input type={"text"} placeholder="Wachtwoord" onChange={handlePassword}/>
            </div>
            <div className={"inline"}>
                Nog geen account? Registreer
                <div className={"inline, link"} onClick={() => handleClick("register")}>
                    hier
                </div>
            </div>
            <br/>
            <button className={"button"} onClick={submit}>Login</button>
        </div>
    )
}

export default TextFields;
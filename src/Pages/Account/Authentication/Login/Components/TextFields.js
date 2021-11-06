import * as React from 'react';
import {Link, PrimaryButton, TextField} from '@fluentui/react';
import './TextFields.css';
import {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";



function TextFields() {
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
        api.post("/account/login", {
            username: username,
            password: password
        }).then(response => { console.log(response.data) })
    }

    return (
        <div className={"TextField"}>
            <TextField label="With placeholder" placeholder="Gebruikersnaam" onChange={(e, value) => setPassword(value)}/>
            <TextField label="With placeholder" placeholder="Wachtwoord" onChange={(e, value) => setUsername(value)}/>
            <br/>
            <div>Nog geen account? Registreer <div onClick={() => handleClick("register")}>hier</div> </div>
            <br/>
            <div>
                <PrimaryButton onClick={submit}>Login</PrimaryButton>
            </div>
        </div>
    )
}

export default TextFields;
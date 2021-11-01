import * as React from 'react';
import {Link, PrimaryButton, TextField} from '@fluentui/react';
import './TextFields.css';
import {useState} from "react";
import axios from "axios";



function TextFields() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const api = axios.create({
        baseURL: "http://localhost:5000"
    })

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
            <div>Nog geen account? Registreer <Link to={"/register"}>hier</Link> </div>
            <br/>
            <div>
                <PrimaryButton onClick={submit}>Login</PrimaryButton>
            </div>
        </div>
    )
}

export default TextFields;
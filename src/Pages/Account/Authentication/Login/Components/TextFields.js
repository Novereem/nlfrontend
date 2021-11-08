import * as React from 'react';
import {PrimaryButton, TextField} from '@fluentui/react';
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
        }).then(response => {
            localStorage.setItem('token', response.data)
            history.push("/")
        })
    }

    return (
        <div className={"TextField"}>
            <div className={"content"}>bruh {' '}<TextField className={"input, inline"} styles={{
                main: {
                    fontsize: '50px',
                },
            }} placeholder="Gebruikersnaam" onChange={(e, value) => setPassword(value)}/></div>
            <div className={"content"}>bruh {' '}<TextField className={"input, inline"} placeholder="Wachtwoord" onChange={(e, value) => setUsername(value)}/></div>
            <div className={"inline"}>
                Nog geen account? Registreer {' '}
                <div className={"inline"} onClick={() => handleClick("register")}>
                     hier
                </div>
            </div>
            <br/>
            <br/>
            <PrimaryButton onClick={submit}>Login</PrimaryButton>
        </div>
    )
}

export default TextFields;
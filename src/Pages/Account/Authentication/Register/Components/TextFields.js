import {useState} from "react";
import axios from "axios";
import {Link, PrimaryButton, TextField} from "@fluentui/react";
import * as React from "react";

function TextFields() {
    const[email, setEmail] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const api = axios.create({
        baseURL: "http://localhost:5000"
    })

    function submit(){
        api.post("/account/register", {
            email: email,
            username: username,
            password: password
        }).then(response => { console.log(response.data) })
    }

    return (
        <div className={"TextField"}>
            <TextField label="With placeholder" placeholder="Email" onChange={(e, value) => setEmail(value)}/>
            <TextField label="With placeholder" placeholder="Gebruikersnaam" onChange={(e, value) => setPassword(value)}/>
            <TextField label="With placeholder" placeholder="Wachtwoord" onChange={(e, value) => setUsername(value)}/>
            <br/>
            <div>Heb je al een account? Log <Link to={"/login"}>hier</Link> in</div>
            <br/>
            <div>
                <PrimaryButton onClick={submit}>Registreer</PrimaryButton>
            </div>
        </div>
    )
}

export default TextFields;
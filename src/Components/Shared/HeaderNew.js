import {useEffect, useState} from "react";
import axios from "axios";
import {Link, PrimaryButton, TextField} from "@fluentui/react";
import * as React from "react";
import {useHistory} from "react-router-dom";
import './Header.css';
import {MdAccountCircle} from 'react-icons/md';

function HeaderNew(props) {
    const api = axios.create({
        baseURL: "http://localhost:5000"
    })
    const[accountInfo, setAccountInfo] = useState({})
    useEffect(() => {
        if (props.api !== undefined && localStorage.getItem('token') !== null)
        {
            let token = localStorage.getItem('token')
            props.api.get("account/info/" + token).then(res => {
                console.log(res.data)
                setAccountInfo(res.data)
            })
        }
    }, [props.api])
    let history = useHistory();

    function handleClick(target) {
        history.push("/" + target)
    }

    function Account() {
        const isLoggedIn = localStorage.getItem('token') === null;
        console.log(isLoggedIn)
        if (isLoggedIn) {
            return <li className={"rightItem"}><a href="#about">
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{display: "flex", maxHeight: "100%", alignItems: "center"}}>
                        <MdAccountCircle className={"accountIcon"}/>
                        {"   "}
                        <div>{accountInfo.username}</div>
                    </div>
                </div>
            </a></li>
        }
        return <li className={"rightItem"} onClick={() => {handleClick("login")}}><a>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", maxHeight: "100%", alignItems: "center"}}>
                    <MdAccountCircle className={"accountIcon"}/>
                    {"   "}
                    <div>Log In</div>
                </div>
            </div>
        </a></li>
    }

    return (
        <div style={{height: "80px"}}>
            <ul>
                <li className={"leftItem"} onClick={() => {handleClick("")}}><a>Home</a></li>
            <li className={"li"}><a href="#news">Vind uw laptop</a></li>
                <li className={"li"}><a href="#news">Laptops kaufen</a></li>
                <li className={"li"}><a href="#contact">Meer informatie</a></li>
                <Account/>
            </ul>
        </div>
    )
}

export default HeaderNew;
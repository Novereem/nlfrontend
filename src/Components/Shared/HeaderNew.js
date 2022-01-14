import {useEffect, useState} from "react";
import axios from "axios";
import {Link, PrimaryButton, TextField} from "@fluentui/react";
import * as React from "react";
import {useHistory} from "react-router-dom";
import './Header.css';
import {MdAccountCircle} from 'react-icons/md';
import {getAPI} from "../../Redux/selectors";
import {connect} from "react-redux";

function HeaderNew(props) {
    const[accountInfo, setAccountInfo] = useState({})
    useEffect(() => {
        if (props.api !== undefined && localStorage.getItem('token') !== null) {
            let token = localStorage.getItem('token')
            props.api.get("/account/info/" + token).then(res => {
                setAccountInfo(res.data)
            })
        }
    }, [props.api])

    let history = useHistory();
    function handleClick(target) {
        history.push("/" + target)
    }

    function Account() {
        const isLoggedIn = localStorage.getItem('token') !== null;
        if (isLoggedIn) {
            return <li className={"rightItem"} onClick={() => {handleClick("account")}}><a>
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
                <li className={"li"} onClick={() => {handleClick("tutorial")}}><a>Vind uw laptop</a></li>
                <li className={"li"} onClick={() => {handleClick("laptops")}}><a>Laptops Kopen</a></li>
                <li className={"li"} onClick={() => {handleClick("moreinformation")}}><a>Meer Informatie</a></li>
                <Account/>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        api : getAPI(state)
    };
}

export default connect(mapStateToProps)(HeaderNew);
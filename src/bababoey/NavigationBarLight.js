import * as React from 'react';
import './NavigationBarLight.css';
import {useState} from "react";
import {darkTheme, lightTheme} from "../Themes";

function NavigationBarLight() {
    const [theme, setTheme] = useState();

    return <div>
        <ul>
            <li><a href={"/"}>Vind Jouw Laptop</a></li>
            <li><a href={"/"}>Vind Jouw Laptop</a></li>
            <li><a href={"/"}>Vind Jouw Laptop</a></li>
            <li><a href={"/"}>Vind Jouw Laptop</a></li>
            <li onClick={theme} className={'floatRight'}><a href={"/"}>Thema</a></li>
        </ul>
    </div>
}

function theme(){
    if(localStorage.getItem('darkMode') === 'true') {
        localStorage.setItem('darkMode', "false")
    }
    else {
        localStorage.setItem('darkMode', "true")
    }
    window.location.reload();
}

export default NavigationBarLight;
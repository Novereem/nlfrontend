import {useEffect, useState} from "react";
import axios from "axios";
import * as React from "react";
import {useHistory} from "react-router-dom";
import "./Laptops.css"

function SingleLaptop(props) {
    const [screensize, setScreensize] = useState([]);
    const [processor, setProcessor] = useState([]);
    const [opslag, setOpslag] = useState([]);
    const [ram, setRam] = useState([]);
    useEffect(() =>{
        if(props.screensize !== undefined){
            setScreensize(props.screensize)
        }
        if(props.processor !== undefined){
            setProcessor(props.processor)
        }
        if(props.opslag !== undefined){
            setOpslag(props.opslag)
        }
        if(props.ram !== undefined){
            setRam(props.ram)
        }
    },[props]);

    return (
        <div className={"laptop-container"}>
            <div className={"laptop"}>
                <div className={"laptop-title"}>Laptop naam</div>
                <div className={"laptop-specs"}>Scherm: {screensize}</div>
                <div className={"laptop-specs"}>Processor: {processor}</div>
                <div className={"laptop-specs"}>Opslag: {opslag}</div>
                <div className={"laptop-specs"}>Werkgeheugen: {ram}</div>
            </div>
        </div>
    )
}

export default SingleLaptop;
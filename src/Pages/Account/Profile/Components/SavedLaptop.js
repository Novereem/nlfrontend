import {useEffect, useState} from "react";
import * as React from "react";
import {getAPI, getAPITUT} from "../../../../Redux/selectors";
import {connect} from "react-redux";
import "./SavedLaptop.css";

function TutorialResults(props) {
    const [useranswers, setUseranswers] = useState([]);
    useEffect(() =>{
        if (props.api !== undefined) {
            let token = localStorage.getItem('token')
            props.api.get("/tutorial/results/" + token).then(res => {
                setUseranswers(res.data)
            })
        }
    },[props]);


    return (
        <div>
            <div>
                <div className={"savedlaptop-container"}>
                    <div className={"savedlaptop"}>
                        <div className={"savedlaptop-title"}>Uw ideale laptop: </div>
                        <div className={"savedlaptop-specs"}>Processor: Inter/Amd {useranswers.processor}</div>
                        <div className={"savedlaptop-specs"}>Werkgeheugen: {useranswers.ram}</div>
                        <div className={"savedlaptop-specs"}>Opslag: {useranswers.storage}</div>
                        <div className={"savedlaptop-specs"}>Graphics Card: {useranswers.graphicsCard}</div>
                        <div className={"savedlaptop-specs"}>Scherm: {useranswers.screenSize}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        api : getAPITUT(state)
    };
}

export default connect(mapStateToProps)(TutorialResults);
import {useEffect, useState} from "react";
import axios from "axios";
import * as React from "react";
import {useHistory} from "react-router-dom";

function ChoiceButtons(props) {

    const [answers, setAnswers] = useState([]);
    const[currentAnswer,setCurrentAnswer] = useState({});
    useEffect(() =>{
        if(props.answers !== undefined){
            setAnswers(props.answers)
        }
    },[props]);

    let history = useHistory();
    function handleClick(target) {
        history.push("/" + target)
    }


    function submit() {
        props.submit(currentAnswer);
        if (props.answers[0].questionId === 9)
        {
            handleClick("account");
        }
    }
    function Button() {
        if (props.answers !== undefined) {
            return <button onClick={() => submit()}>{props.answers[0].questionId === 9 ? "Finish Tutorial" : "Submit"}</button>
        }
        else
        {
            return <button onClick={() => submit()}>Submit</button>
        }
    }

    return (
        <div>
            {answers.map(answer => <div><input onChange={() =>setCurrentAnswer(answer)} type="radio" name="answer"/>{answer.text}</div>)}
            <Button/>
        </div>
    )
}

export default ChoiceButtons;
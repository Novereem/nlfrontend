import {useEffect, useState} from "react";
import ChoiceButtons from "./Components/ChoiceButtons";
import {getAPITUT} from "../../../Redux/selectors";
import {connect} from "react-redux";

function Tutorial(props) {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        if (props.apiTut !== undefined) {
            props.apiTut.get("/tutorial/start/" + localStorage.getItem('token')).then(res => {
                setQuestion(res.data)
            })
        }
    }, [props.apiTut])

    function submitAnswer(answer) {
        let id = answer.id;
        let token = localStorage.getItem('token');
        let qid = question.id;
        props.apiTut.post("/tutorial/next", {
            answerid: id,
            token: token
        }).then(response => {

            if (response.data.token !== undefined) {
                setQuestion(response.data)
            } else {
                setQuestion(response.data)
            }
        })
    }

    return (
        <div style={{marginTop: "60px"}}>
            {question.token === undefined ? <div> <div>{question.text}</div>
                <ChoiceButtons submit={submitAnswer} answers={question.answers}/> </div>: <div>hurb</div>}

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        apiTut: getAPITUT(state)
    };
}

export default connect(mapStateToProps)(Tutorial)
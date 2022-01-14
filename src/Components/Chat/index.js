import {connect} from "react-redux";
import {useEffect, useState} from "react";
import ChatBox from "./Components/ChatBox";
import NewChat from "./Components/New/Chat";

function Chat(props) {
    useEffect(() => {
        if (props.apiTut !== undefined) {
        }
    }, [props.apiTut])

    return(
        <div style={{ margin: '0 30%' }}>
            <NewChat />
        </div>
    )
}

export default Chat;
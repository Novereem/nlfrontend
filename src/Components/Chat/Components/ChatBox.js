import {useEffect, useState} from "react";
import axios from "axios";
import * as React from "react";
import {useHistory} from "react-router-dom";
import "./ChatBox.css"
import {HttpTransportType, HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
import {TextField} from "@fluentui/react";

function ChatBox(props) {
    const [messages, setMessages] = useState(["a", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", "c", "d", "e", "f", "g"]);
    const [chatmessage, setChatmessage] = useState("");
    const [connection, setConnection] = useState({});

    useEffect(() => {
        let connection1 = (new HubConnectionBuilder().withUrl("https://localhost:5001/chathub", {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets
        }).configureLogging(LogLevel.Information).withAutomaticReconnect().build())
        connection1.start();
        setConnection(connection1);

        try {
            connection.invoke("Joined", "name");
            connection.on("NewMessage", message => {
                const oldMessages = messages;
                oldMessages.push(message);
                setMessages(oldMessages);
            })
        } catch (error) {
            console.log(error)
        }
    }, [props]);

    function handleChat(e) {
        setChatmessage(e.target.value);
    }

    function sendMessage() {
        connection.invoke("ChatMessage", chatmessage)
    }

    return (
        <div className={"chat-container"}>
            <div className={"chat-box"}>
                {messages.map(item => <div className={"chat-message"}>
                    {item}
                </div>)}
                <div className={"chat-input"}>
                    <input type={"text"} onChange={handleChat} className={"chat-textfield"}>

                    </input>
                    <button onClick={() => sendMessage()}>
                        send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;
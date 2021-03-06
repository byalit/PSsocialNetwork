import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Message = (props) => {
    const newMessageElement = React.createRef();
    const addMessage = () => {
        const textMessage = newMessageElement.current.value;
        alert(textMessage);
    }
    return (
        <div>
    <div className={s.message}>{props.message}</div>


    </div>
    )
}

export default Message;

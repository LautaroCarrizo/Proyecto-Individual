import "./messages.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearMessages } from "../../redux/actions";
import { useEffect } from "react";

export default function Messages() {
  const dispatch = useDispatch()
  const message = useSelector((state) => state.message);

  const renderMessages = () => {
    if (message.registerPostMessage) {
      return <div className="messages"> <p>Chef: {message.registerPostMessage} </p> </div>;
    } else if (message.recipePostMessage) {
      return <div className="messages"> <p> Chef: {message.recipePostMessage} </p> </div>;
    }
  };
  useEffect(() => {
    if (message.registerPostMessage || message.recipePostMessage) {
      const timer = setTimeout(() => {
        dispatch(clearMessages());
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, message.registerPostMessage, message.recipePostMessage]);

  return <div>{renderMessages()}</div>; 
}

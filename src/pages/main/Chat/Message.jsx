import React, { useContext, useEffect, useRef } from "react";
import { Timestamp } from "firebase/firestore";
import { AuthContext } from "../../../utils/AuthContext";
import { ChatContext } from "../../../utils/ChatContext";
import styles from "./chat.module.scss";
function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const toHoursAndMinutes = (totalSeconds) => {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = Math.floor(totalSeconds % 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    if (hours !== 0) {
      return `${hours} Hours Ago`;
    } else if (hours === 0 && minutes !== 0) {
      return `${minutes} Minutes Ago`;
    } else if (hours === 0 && minutes === 0 && seconds !== 0) {
      return `${seconds} Seconds Ago`;
    } else if (hours === 0 && minutes === 0 && seconds === 0) {
      return "Just now";
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.chatMsg} ${
        message.senderID === currentUser.id && styles.owner
      }`}
    >
      <div className={styles.chatMsgProfile}>
        <img
          className={styles.chatMsgImg}
          src={
            message.senderID === currentUser.id
              ? currentUser.imageUrl
              : data.user.imageUrl
          }
          alt=""
        />
        <div className={styles.chatMsgDate}>
          {toHoursAndMinutes(Timestamp.now() - message.date)}
        </div>
      </div>
      <div className={styles.chatMsgContent}>
        <div className={styles.chatMsgText}>{message.text}</div>
        {message.img && <img src={message.img} alt={message.text} />}
      </div>
    </div>
  );
}

export default Message;

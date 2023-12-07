import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../../utils/AuthContext";
import { ChatContext } from "../../../utils/ChatContext";
import { db } from "../../../configs/firebase.configs";
import styles from "./chat.module.scss";
function Chats() {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.id), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.id && getChats();
  }, [currentUser.id]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };
  return (
    <div className={styles.conversationArea}>
      {chats &&
        Object.entries(chats)
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((chat) => (
            <div
              className={styles.msg}
              key={chat[0]}
              onClick={() => handleSelect(chat[1].userInfo)}
            >
              <img
                className={styles.msgProfile}
                src={chat[1].userInfo.imageUrl}
                alt=""
              />
              <div className={styles.msgDetail}>
                <div className={styles.msgUsername}>
                  {chat[1].userInfo.username}
                </div>
                <div className={styles.msgContent}>
                  <span className={styles.msgMessage}>
                    {chat[1].lastmessage?.text}
                  </span>
                  <span className={styles.msgDate}>20m</span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Chats;

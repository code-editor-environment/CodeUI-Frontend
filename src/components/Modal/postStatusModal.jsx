import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { categories, close } from "../../store/modal/modal-slice";
import { db } from "../../configs/firebase.configs";

function PostStatusModal() {
  const dispatch = useDispatch();
  const [type, setType] = useState("button");
  const [todos, setTodos] = useState([]);
  const changeStatus = (e) => {
    setType(e.target.value);
  };
  const submit = () => {
    dispatch(categories(type));
    dispatch(close());
  };
  const fetchPost = async () => {
    await getDocs(collection(db, "categories")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="options-modal">
      <h3 className="heading">What are you making?</h3>
      <div className="options">
        {todos?.map((category, i) => (
          <label
            className={`option ${type === category.name ? "active" : "false"}`}
            key={i}
          >
            <input
              type="radio"
              name="option"
              id={category.id}
              value={category.name}
              checked={type === category.name}
              onChange={changeStatus}
            />
            <div dangerouslySetInnerHTML={{ __html: category.img }} />
            <span className="option-label">{category.name}</span>
          </label>
        ))}
      </div>
      <div className="buttons">
        <button className="button button--primary" onClick={submit}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default PostStatusModal;

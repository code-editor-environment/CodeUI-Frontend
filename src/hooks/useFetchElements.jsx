import { useDispatch } from "react-redux";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../configs/firebase.configs";
import { getElements } from "../store/element/elements-slice";

export const useFetchElements = () => {
  const dispatch = useDispatch();
  return async () => {
    const querySnapshot = await getDocs(collection(db, "elements"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch(getElements(newData));
  };
};

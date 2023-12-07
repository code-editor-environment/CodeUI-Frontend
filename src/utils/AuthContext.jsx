import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase.configs";
import { useSelector } from "react-redux";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { user, profileRes } = useSelector((state) => state.profile);
  const [currentUser, setCurrentUser] = useState({
    id: user?.id,
    ...profileRes,
  });
//   console.log("🚀currentUser:", { id :user.id, ...profileRes });
//   console.log("🚀currentUser:", { id: user.id, ...profileRes });

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       //   console.log(user);
//     });
//     return () => {
//       unsub();
//     };
//   }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

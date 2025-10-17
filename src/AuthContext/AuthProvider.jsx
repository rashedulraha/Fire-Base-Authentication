import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../FireBaseAuth/Firebase.init";
import { useEffect } from "react";

const AuthProvider = ({ children }) => {
  // ! get current user

  //! create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ! sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const connections = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in auth state change", currentUser);
    });

    return () => {
      connections();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

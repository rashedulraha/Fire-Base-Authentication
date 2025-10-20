import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../FireBaseAuth/Firebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);

  // ! get current user

  //! create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ! sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //! register with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ! sign out user
  const signOutUser = () => {
    return signOut(auth);
  };

  // ! sign in with github

  const signInGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const connections = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      connections();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    user,
    signOutUser,
    loading,
    signInWithGoogle,
    signInGithub,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

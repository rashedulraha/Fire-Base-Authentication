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

  //! Register user
  const Register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ! Login user
  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //! Login with google
  const LoginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ! Login with github
  const LogInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // ! Logout user
  const LogoutUser = () => {
    return signOut(auth);
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
    Register,
    LoginUser,
    user,
    LogoutUser,
    loading,
    LoginWithGoogle,
    LogInWithGithub,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../FireBaseAuth/Firebase.init";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  //

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //! Register user
  const Register = async (email, password) => {
    try {
      const userInformation = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userInformation?.user);
      toast.success("Registration successfully , please verify  your email");
      return userInformation;
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ! Login user
  const LoginUser = async (email, password) => {
    try {
      const userInformation = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!userInformation?.user?.emailVerified) {
        toast.error("Please verify your email before logging in.");
        return;
      }
    } catch (error) {
      toast.error(error.message);
    }
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

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

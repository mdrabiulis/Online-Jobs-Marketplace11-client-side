import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);




  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signInWithEmail =(email,password)=>{
    return signInWithEmailAndPassword(auth, email,password)
  }


  const SignOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userAllUpdateProfile = (Name, Photo) => {
    return updateProfile(auth.currentUser, {
      displayName: Name,
      photoURL: Photo,
    });
  };

  const authUserInfo = {
    user,
    loading,
    createNewUser,
    SignOutUser,
    userAllUpdateProfile,
    signInWithEmail,
  };

  return (
    <AuthContext.Provider value={authUserInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

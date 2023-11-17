import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import useAxiosSecure from "../Hook/useAxiosSecure";

export const AuthContext = createContext(null);
const providerGoogle = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginUserGooglr = () => {
    return signInWithPopup(auth, providerGoogle);
  };

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axiosSecure.post("/jwt", loggedUser).then((res) => {
          console.log(res.data);
        });
      } else {
        axiosSecure.post("/logout", loggedUser).then((res) => {
          console.log(res.data);
        });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email, axiosSecure]);

  const userAllUpdateProfile = (Name, Photo) => {
    setLoading(true);
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
    loginUserGooglr,
  };

  return (
    <AuthContext.Provider value={authUserInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

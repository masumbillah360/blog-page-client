import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.init";
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleGLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const userInfo = {
    name: "Masum",
    email: "masum@gmail.com",
  };
  const authInfo = {
    user,
    userInfo,
    handleLogin,
    handleSignUp,
    handleGLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

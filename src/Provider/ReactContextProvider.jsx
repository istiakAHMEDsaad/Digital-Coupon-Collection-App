import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  getAuth,
} from 'firebase/auth';
import app from '../Utility/firebase.config';

export const RouterContext = createContext(null);
const auth = getAuth(app);

const ReactContextProvider = ({ children }) => {
  
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch('../coupon.json')
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);
  // Coupon Collection footer title
  const pageName = 'Coupon Collection';

  // Show Password Handle
  const [showPassword, setShowPassword] = useState(false);

  // User
  const [user, setUser] = useState(null);
  // Hold Loading
  const [loading, setLoading] = useState(true);

  // Create New User
  const createNewUserEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login With Pop Up
  const logInWithPopUp = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // Log Out User
  const signOutUser = () => {
    return signOut(auth);
  };

  // Reset Password
  const forgetMyPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Update Profile
  const profileNamePhoto = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Contain all object
  const provideObject = {
    pageName,

    // Show toggle password
    showPassword,
    setShowPassword,

    // User from google
    user,
    setUser,
    loading,

    // Create new user With email and password
    createNewUserEmailPassword,

    // Login User
    logInUser,

    // Login PopUp
    logInWithPopUp,

    // Logout User
    signOutUser,

    // Forget Password
    forgetMyPassword,

    // API data
    apiData,

    // Update image and name
    profileNamePhoto,
  };

  // Observer: User Login Or LogOut
  useEffect(() => {
    const cleanInfo = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      cleanInfo();
    };
  }, []);

  // console.log(user);
  return (
    <RouterContext.Provider value={provideObject}>
      {children}
    </RouterContext.Provider>
  );
};

ReactContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ReactContextProvider;

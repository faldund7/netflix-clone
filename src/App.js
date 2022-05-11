import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { logout, login, selectUser } from './features/userSlice';

function App() {
  // const user = null;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);
  // firebase stores user information in a cookie (localMemory/localStorage) to determine Signed In/Out status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      // Check for user status
      if (userAuth) {
        // Logged In
        // console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        // Logged Out
        dispatch(logout());
      };
    });

    console.log(user);
    // return unsubscribe;
    // OR
    // cleanup function that does not allow adding of another event listener unsubscribe (onAuthStateChanged)
    return () => {
      unsubscribe();
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>
        ) : (
          <Routes>
            <Route exact path='/profile' element={<ProfileScreen/>}>
            </Route>
            <Route exact path="/" element={<HomeScreen/>}>
            </Route>
          </Routes>
        )
        }
        
    </Router>
    </div>
  );
}

export default App;

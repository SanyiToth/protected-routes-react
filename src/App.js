import './App.css';
import React, {useState} from "react";
import LandingPage from "./components/LandingPage";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./components/Profile";

function App() {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <Router>
            <h1>Protected React Router</h1>
            <Route path="/" exact>
                <button onClick={() => {
                    setIsAuth(true)
                }}>Login
                </button>
                <button onClick={() => {
                    setIsAuth(false)
                }}>Logout
                </button>
                <Link to="/profile">Go to Profile</Link>
            </Route>
            <ProtectedRoute path="/profile" component={Profile} isAuth={isAuth}/>
        </Router>
    );
}

export default App;

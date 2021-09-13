import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, useHistory} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./components/Profile";
import {CURRENT_PASSWORD} from "./Password";
import LoginForm from "./components/LoginForm";


function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUSer] = useState({email: ""});
    const [error, setError] = useState("");


    const getUsers = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        return await response.json();
    }

    useEffect(() => {
            getUsers()
                .then(data => {
                    setUsers(data);
                    setError("");
                })
                .catch(() => {
                    setUsers([]);
                    setError("Something went wrong!");
                })
        },
        [])

    const Logout = () => {
        setUSer({
            name: "",
            email: ""
        });
        setIsAuth(false);
        setError("You logged out!");
    }



    return (
        <Router>
            <Route path="/" exact>
                <LoginForm users={users} error={error} isAuth={isAuth} setIsAuth={setIsAuth} setError={setError}/>
            </Route>
            <ProtectedRoute path="/profile" Logout={Logout} component={Profile} isAuth={isAuth}/>
        </Router>
    );
}

export default App;

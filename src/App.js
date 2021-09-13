import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        setIsLoggedIn(false);
        setError("You logged out!");
    }


    return (
        <div className="App">
            <Router>
                <Route path="/" exact>
                    <LoginForm users={users} error={error} isAuth={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setError={setError}/>
                </Route>
                <ProtectedRoute path="/dashboard" Logout={Logout} component={Dashboard} isAuth={isLoggedIn}/>
            </Router>
        </div>
    );
}

export default App;

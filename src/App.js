import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "./components/LoginForm/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState({});


    const Logout = () => {
        setUser({});
        setIsLoggedIn(false);
        setError("You logged out!");
    }



    return (
        <div className="App">
            <Router>
                <Route path="/" exact>
                    <LoginForm setUser={setUser} setIsLoggedIn={setIsLoggedIn} setError={setError}/>
                </Route>
                <ProtectedRoute path="/dashboard" user={user} component={Dashboard} Logout={Logout} isLoggedIn={isLoggedIn}/>
            </Router>
        </div>
    );
}

export default App;

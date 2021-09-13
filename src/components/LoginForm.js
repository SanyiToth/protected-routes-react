import React, {useState} from 'react';
import {CURRENT_PASSWORD} from "../Password";
import {useHistory} from "react-router-dom";


function LoginForm({users, error, setError,setIsLoggedIn}) {

    const [formValues, setFormValues] = useState({email: "", password: ""});
    const history = useHistory();

    const Login = formValues => {

        const isValidEmail = users.filter(user =>
            formValues.email === user.email).length > 0;

        const isValidPassword = formValues.password === CURRENT_PASSWORD;

        const navigateToDashboard = () => {
            history.push("/dashboard");
        }

        if (isValidEmail && isValidPassword) {
            setIsLoggedIn(true);
            navigateToDashboard();
        } else {
            setError("Email or Password doesn't match!")
        }
    }


    const submitHandler = e => {
        e.preventDefault();
        Login(formValues);
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"
                           onChange={e => setFormValues({...formValues, email: e.target.value})}
                           value={formValues.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"
                           onChange={e => setFormValues({...formValues, password: e.target.value})}
                           value={formValues.password}/>
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm;

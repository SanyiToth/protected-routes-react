import React, {useState} from 'react';
import {CURRENT_PASSWORD} from "../Password";
import {useHistory} from "react-router-dom";


function LoginForm({users, error, setError, isAuth, setIsAuth}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const history = useHistory();

    const Login = details => {
        users.forEach(user => {
            //Shanna@melissa.tv,Karley_Dach@jasper.info
            if (details.email === user.email && details.password === CURRENT_PASSWORD) {
                setIsAuth(true);
                setError("");
            }
        });
        isAuth ? history.push("/profile") : setError("Wrong email or password!");
    }


    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"
                           onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"
                           onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm;

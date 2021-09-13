import React, {useState} from 'react';
import {CURRENT_PASSWORD} from "../Password";
import {Button, Form, Icon} from 'react-bulma-components';
import {useHistory} from "react-router-dom";
import 'bulma/css/bulma.min.css';
import './LoginForm.css';



function LoginForm({users, error, setError, setIsLoggedIn}) {

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
        <div className="LoginForm">
            <Form.Field>
                <Form.Label>Email</Form.Label>
                <Form.Control>
                    <Form.Input placeholder="Email" name="email" value={formValues.name}
                                onChange={e => setFormValues({...formValues, email: e.target.value})}/>
                    <Icon align="left">
                        <i className="far fa-envelope"/>
                    </Icon>
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>Password</Form.Label>
                <Form.Control>
                    <Form.Input placeholder="Password" name="password" type="password" value={formValues.password}
                                onChange={e => setFormValues({...formValues, password: e.target.value})}/>
                    <Icon align="left">
                        <i className="fas fa-key"/>
                    </Icon>
                </Form.Control>
            </Form.Field>
            <Button.Group>
                <Button fullwidth rounded color="primary" onClick={submitHandler}>Login</Button>
            </Button.Group>
        </div>
    )
}

export default LoginForm;

import React, {useState} from 'react';
import {CURRENT_PASSWORD} from "../../Password";
import {Button, Card, Form, Icon} from 'react-bulma-components';
import {useHistory} from "react-router-dom";
import 'bulma/css/bulma.min.css';
import './LoginForm.css';


function LoginForm({setUser, setError, setIsLoggedIn}) {

    const [formValues, setFormValues] = useState({email: "", password: ""});
    const history = useHistory();



    const navigateToDashboard = () => {
        history.push("/dashboard");
    }


    const Login = async formValues => {
        const checkUserEmail = async (formValues) => {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${formValues.email}`);
            return await response.json();
        }
        await checkUserEmail(formValues)
            .then(data => {
                const isValidEmail = data.length > 0;
                const isValidPassword = formValues.password === CURRENT_PASSWORD;

                if (isValidPassword && isValidEmail) {
                    setUser(data);
                    setIsLoggedIn(true);
                    setError("");
                } else {
                    setError("Wrong username or password!")
                }
            })
            .catch(() => {
                setUser("");
                setError("Something went wrong!");
            })
    }

    const submitHandler = e => {
        e.preventDefault();
        Login(formValues)
            .then(() => {
                navigateToDashboard()
            });
    }


    return (
        <div className="LoginForm">
            <Card className="LoginCard">
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
                        <Form.Input placeholder="Password" name="password" type="password"
                                    value={formValues.password}
                                    onChange={e => setFormValues({...formValues, password: e.target.value})}/>
                        <Icon align="left">
                            <i className="fas fa-key"/>
                        </Icon>
                    </Form.Control>
                </Form.Field>
                <Button.Group>
                    <Button fullwidth rounded color="success" onClick={submitHandler}>Login</Button>
                </Button.Group>
            </Card>
        </div>
    )
}

export default LoginForm;

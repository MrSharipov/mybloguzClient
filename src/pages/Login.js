import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Authorization
    const handleLogin = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3003/auth/signin", {email, password})
        .then(response => {
            localStorage.setItem("access_token", response.data.access_token);
            window.location.replace('/');
        })
        .catch((err)=> {
            if(err.response.status === 403){
                alert(err.response.data.message)
            }
        });
    }


  return (
    <div className='m-5 center'>
        <h1>Log In</h1>
        <Form onSubmit={handleLogin}>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="Email">
                    Email
                    </Label>
                    <Input
                    id="Email"
                    name="email"
                    placeholder="Username"
                    type="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="Password">
                    Password
                    </Label>
                    <Input
                    id="Password"
                    name="password"
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col md={4}>
                <Button color='primary' type='submit'>
                Sign in
                </Button>  
            </Col>
            <Col md={8}>
                <p>OR to sign up click <Link to="/signup">here</Link></p>
            </Col>
            </Row>
          
        </Form>
    </div>
  )
}

export default Login
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3003/auth/signup", {name, email, password})
        .then(response => {
            alert("Successfully registered!!!")
            navigate('/login');
        })
        .catch((err)=> {
            if(err.response.status === 403){
                alert(err.response.data.message)
            } else {
                throw err;
            }
        });
    }

  return (
    <div className='m-5 center'>
        <h1>Sign Up</h1>
        <Form
        onSubmit={handleLogin}>
        <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="name">
                    Your name
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    type="text"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                </FormGroup>
                </Col>
            </Row>
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
                <p>OR to log in click <Link to="/login">here</Link></p>
            </Col>
            </Row>
          
        </Form>
    </div>
  )
}

export default Login
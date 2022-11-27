import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import SideBar from './SideBar';
import { Form, Row, Col, FormGroup, Label, Input, Button, Container } from 'reactstrap';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //Authorization
    let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    }

    //Get single post
    useEffect(()=>{
        axios.get(process.env.REACT_APP_REMOTE_BACKEND + "/users" || "http://localhost:3003/users/", config)
            .then((res) => {
                const { name, email } = res.data;
                setName(name);
                setEmail(email);
            })
            .catch((err) => {
                alert(err.response.data.message);
                console.log(err)
                navigate("/login")
            });
    // eslint-disable-next-line
    },[]);

    const handleEdit = async (e) => {
        e.preventDefault();
        await axios.put(process.env.REACT_APP_REMOTE_BACKEND + "/users" || "http://localhost:3003/users", {name, email, password}, config) 
        .then(response => {
            alert("User successfully updated!!! To see changes login again");
            window.location.replace("/dashboard");
        })
        .catch((err)=> {
            alert(err.response.data.message)
        });
    }

  return (
    <Container>
        <Row>
          <Col md={3} className="me-4">
            <SideBar />
          </Col>
          <Col md={8}>
            <div className='center'>
                <h1>Edit Profile</h1>
                <Form
                onSubmit={handleEdit}>
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
                            New password
                            </Label>
                            <Input
                            id="Password"
                            name="password"
                            placeholder="new password"
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
                        Update
                        </Button>  
                    </Col>
                    </Row>
                
                </Form>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default EditProfile
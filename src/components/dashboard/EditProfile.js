import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import SideBar from './SideBar';
import { Form, Row, Col, FormGroup, Label, Input, Button, Container } from 'reactstrap';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEdit = async () => {
        navigate("/dashboard");
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
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    
    //Authorization
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      }
    }
    const handleCreate = async (e) => {
        e.preventDefault();
        await axios.post(process.env.REACT_APP_REMOTE_BACKEND + "/posts" || "http://localhost:3003/posts", {title, link, description}, config) 
        .then(response => {
            alert("Post successfully created!!!")
            navigate('/');
        })
        .catch((err)=> {
            alert(err.response.data.message);
        });
    }

  return (
    <div className='m-5 center'>
        <h1>Create Post</h1>
        <Form
        onSubmit={handleCreate}>
        <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="title">
                    Post Title
                    </Label>
                    <Input
                    id="title"
                    name="title"
                    placeholder="Your title"
                    type="text"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="link">
                    Link
                    </Label>
                    <Input
                    id="link"
                    name="link"
                    placeholder="Image link"
                    type="text"
                    value={link}
                    onChange={(e)=>{setLink(e.target.value)}}
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="description">
                    Description
                    </Label>
                    <Input
                    id="description"
                    name="description"
                    placeholder="Description"
                    type="textarea"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col md={4}>
                <Button color='primary' type='submit'>
                Create
                </Button>  
            </Col>
            </Row>
          
        </Form>
    </div>
  )
}

export default CreatePost
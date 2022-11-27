import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const UpdatePost = (props) => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const {id} = useParams();
    
    //Authorization
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      }
    }

    //Get single post
    useEffect(()=>{
        axios.get(process.env.REACT_APP_REMOTE_BACKEND + "/posts/" + id || "http://localhost:3003/posts/" + id, config)
            .then((res) => {
                const { title, link, description } = res.data;
                setTitle(title);
                setLink(link);
                setDescription(description);
            })
            .catch((err) => {
                alert(err.response.data.message);
                console.log(err)
                navigate("/login")
            });

    // eslint-disable-next-line
    },[id, navigate]);
    
    //Update post
    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(process.env.REACT_APP_REMOTE_BACKEND + "/posts/" + id || "http://localhost:3003/posts/" + id, {title, link, description}, config) 
        .then(response => {
            alert("Post successfully updated!!!")
            navigate('/');
        })
        .catch((err)=> {
            alert(err.response.data.message)
        });
    }

  return (
    <div className='m-5 center'>
        <h1>Update Post</h1>
        <Form
        onSubmit={handleUpdate}>
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
                Update
                </Button>  
            </Col>
            </Row>
          
        </Form>
    </div>

  )
}

export default UpdatePost
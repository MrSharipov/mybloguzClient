import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {BiEdit} from 'react-icons/bi';
import {RiDeleteBin5Line} from 'react-icons/ri';
import { Card, CardBody, CardText, CardTitle, CardLink } from 'reactstrap';

import axios from 'axios';

const MyAllPosts = () => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    
      //Authorization
      let config = {
        headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
      }

      await axios.delete(`http://localhost:3003/posts/${id}`, config) 
      .then(response => {
          alert("Post successfully deleted!!!")
          navigate('/');
      })
      .catch((err)=> {
          alert(err.response.data.message)
      });
  }


  const [posts, setPosts] = useState([]);
  const listHTML = posts.map((post, index)=> <Card key={index} className="mb-3">
        <CardBody>
            <CardTitle tag="h5">
            {post.title}
            </CardTitle>
        </CardBody>
        <img
            alt="Card cap"
            src={post.link}
            width="100%"
        />
        <CardBody>
            <CardText>
            {post.description}
            </CardText>
            <Link to={`/updatepost/${post.id}`} >
            <BiEdit size={"25px"}  />
            </Link>
            <CardLink href="#">
            <RiDeleteBin5Line size={"25px"} onClick={()=>{handleDelete(post.id)}} />
            </CardLink>
        </CardBody>
    </Card>);



  //Authorization

  useEffect(()=>{
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      }
    }
    const handleLogin = async () => {
      await axios.get("http://localhost:3003/posts", config)
      .then(response => {
        setPosts(response.data);
      })
      .catch((err)=> {
          if(err.response.status === 401){
              alert(err.response.data.message)
              window.location.replace('/login');
          } else {
              throw err;
          }
      });
    }
      handleLogin();
  },[]);
  

  return (
    <>
        {listHTML}
    </>
  )
}

export default MyAllPosts
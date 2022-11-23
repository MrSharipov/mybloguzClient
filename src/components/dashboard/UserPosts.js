import React, { useEffect, useState } from 'react';
import {BiEdit} from 'react-icons/bi';
import {RiDeleteBin5Line} from 'react-icons/ri';
import { Card, CardBody, CardText, CardTitle, CardLink } from 'reactstrap';

import axios from 'axios';

const MyAllPosts = () => {
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
            <CardLink href="#">
            <BiEdit size={"25px"} />
            </CardLink>
            <CardLink href="#">
            <RiDeleteBin5Line size={"25px"} />
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
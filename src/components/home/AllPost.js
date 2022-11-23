import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post'

const AllPost = () => {
  const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const handleLogin = async () => {
          await axios.get("http://localhost:3003/posts/all")
          .then(response => {
            setPosts(response.data);
          })
          .catch((err)=> {
            console.log("Error from Backend..........")
             throw err;
          });
        }
          handleLogin();
      },[]);

    const listHTML = posts.map((post, index)=> <Post key={index} title={post.title} link={post.link} description={post.description} />);

  return (
    <div className='makeTwoColumn'>
       {listHTML}
    </div>
  )
}

export default AllPost
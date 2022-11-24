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

    const listHTML = posts.reverse().map((post, index)=> <Post key={index} id={post.id} title={post.title} link={post.link} description={post.description} time={post.createdAt} />);

  return (
    <div className='makeTwoColumn'>
       {listHTML}
    </div>
  )
}

export default AllPost
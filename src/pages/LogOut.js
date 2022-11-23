import React from 'react';
import axios from 'axios';

const LogOut = () => {
    const LogOut = async (e) => {
        await axios.post("http://localhost:3003/logout")
        .then(response => {
            alert("Successfully logged out");
            window.location.replace('/');
        })
        .catch((err)=> {
            // if(err.response.status === 403){
                alert(err.response.data.message)
            // }
        });
    }

    LogOut();

  return (
    <div>
        <h1>Processing ...</h1>
        <p>You are logging Out ............</p>
    </div>
  )
}

export default LogOut
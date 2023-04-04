import React from 'react'
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  
  const [var1 , var2] = useOutletContext();
    return (
        <>
        <h1>Profile Func Component!!</h1> 
        <p>{var1} and {var2} </p>
         </>
  )
}



export default Profile
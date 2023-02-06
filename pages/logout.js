import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

export default function LogOut() {
    const router = useRouter();
    
    axios.get("/api/logout")
        .then((data)=>{
            router.push('/');
        })
        .catch((error)=>{console.log(error.message)})

  return (
    <h1>Loading </h1>
  )
}

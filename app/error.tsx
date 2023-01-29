//kalau mau menggunakan use effect haru tambahkan use client
"use client"
import React, { useEffect } from 'react'

export default function Error({error,reset}:{error:Error,reset:()=>void}) {
  
  
//   munculi log error nya
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
    <div>
        <p>Disini ada error</p>
        <button onClick={() => reset()}>Coba Ulang</button> 

    </div>
  )
}

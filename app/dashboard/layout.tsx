"use client"
import React  from 'react'
// import styles from '../../src/styles/Dashboard.module.css'
// import '../../public/bootstrap/dist/css/bootstrap.css';

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-black text-white p-[20px]'>
        <p>Ini Layout khusus untuk Dashboard</p>
        {children}
    </div>
  )
}

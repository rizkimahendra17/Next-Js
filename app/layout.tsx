"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import '../src/styles/globals.css'



export default function RootLayout({children}: {children: React.ReactNode}) {
    const router=useRouter();

    // agar router bisa kita gunakan di mana aja kenal kan url:string
    const onClickUrl=(url:string)=>{
        router.push(url)
    }

    const menuItem = (url:string,title:string,className?:string) => (
        <div className={`bg-black text-white py-2 px-3 rounded-lg ${className}`}><Link href={url}>{title}</Link></div>
    )

  return (
    <html>
        <head/>
    <body className='container mx-auto py-[10px]'>
        {/* Header */}
        <div className='inline-flex w-full'>
        {menuItem("/","Home","bg-white text-blue-500 text-lg")}
            <div className='inline-flex justify-end space-x-3 w-full'>
           
            {menuItem("/dashboard","Dashboard")}
            {menuItem("/settings","Setting")}
            {menuItem("/calculator","Calculator")}
            {menuItem("/cari","Cari Orang")}
           

        </div>
        </div>
       
        {children}
        </body>
    </html>
  )
}

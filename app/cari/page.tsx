"use client"
import React, { useState } from 'react'
import SectionResult from './[slug]/sectionResult';

export default function Page() {

    const [query, setQuery] = useState('');

    //bisa pakai e:ReactEventHandler / e:any
    const onSearch = (e:any) => {
        //agaar tidak meng refresh
        e.preventDefault();

        const inputQuery = e.target[0].value;
        setQuery(inputQuery);
    }

  return (
    <div>
        <form onSubmit={onSearch} className="flex w-full space-x-3 mt-10">
            <input className='bg-zinc-100 w-5/6 px-3' placeholder='Cari User Github'/>
            <button className='bg-blue-600 w-1/6 text-white py-2 px-3 rounded-md'>Cari Orang</button>
        </form>
        {query && <SectionResult query={query}/>}

    </div>
  )
}

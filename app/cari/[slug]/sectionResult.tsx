import ListItemSearch from 'components/ListItemSearch'

import React from 'react'
import useSWR from 'swr'


const fetcher = (url:string) => fetch(url).then(res => res.json())

interface Props{
    query:string
}
export default function SectionResult({query}:Props) {

    const {data, error} = useSWR(`https://api.github.com/search/users?q=${query}`,fetcher)

    var loading = !data && !error
  return (
    <div style={{ marginTop:"10px" }}>
        <p className='text-lg'>Hasil Pencarian : <span className='font-bold'>{query}</span></p>
        <div>
            {loading && "Loading...."}
            {data && data.items.map((user:any,index:number) => {
                return <ListItemSearch key={index} name={user.login} imageUrl={user.avatar_url} reposUrl={user.repos_url}/>
            })}
        </div>
        </div>
  )
}

import React from 'react'


async function getDataUser(param:string){
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json();
}

async function getDataRepos(param:string){
  const res = await fetch(`https://api.github.com/users/${param}/repos`);
  //kita buat delay meggunakan timeout
  await new Promise(r=>setTimeout(r,2000));
  return res.json();
}

export default async function DetailCari({params}:{params:{slug:string}}) {

  const dataUser = await getDataUser(params.slug);

  const dataRepos = await getDataRepos(params.slug);

  const [user,repos] = await Promise.all([dataUser,dataRepos]);

  return (
    <div>
     <p>Detail User : {params.slug}</p> 
    <div>
      {JSON.stringify(user)}
    </div>

    <p>List Repost : {params.slug}</p> 
    <div>
      {JSON.stringify(repos)}
    </div>
    </div>
  )
}

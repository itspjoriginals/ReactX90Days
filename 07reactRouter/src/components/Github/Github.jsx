import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/itspjoriginals').then(response => response.json()).then(data =>{
    //         console.log(data)
    //         setData(data);
    //     })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex items-center justify-center gap-4'>
  Github Followers: {data.followers}
  <img 
    className='rounded-full w-12 h-12 ml-4' 
    src={data.avatar_url} 
    alt="github profile image" 
  />
</div>

    
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/itspjoriginals')
    return response.json()
}
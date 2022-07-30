import React, { useEffect } from 'react'
import { useState} from 'react'



const Home = () => {

    

    const [data,setData] = useState([])
    
    const api = async function(){
        const url = `http://localhost:3000/getArtists`
        const apidata = await fetch(url)
        const response = await apidata.json()
        const newData = Object.keys(response).map((key)=>response[key])
        // console.log(newData)
        // console.log(response)
        setData(newData)
        console.log(data)
        

    }

    useEffect(()=>{
        api()
    })
    
  return (
    <div>
        <h1>Home</h1>
        <h2>Top 10 Songs</h2>
        


        {/* {
            
            data.map((artist)=>{
                return(
                    <h1>{artist.name}:artist</h1>

                )
            })
        } */}

        
        
        
    </div>
  )
}

export default Home
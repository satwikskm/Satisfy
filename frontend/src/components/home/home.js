import React, { useEffect } from 'react'
import { useState} from 'react'
import './home.css'


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
        <div className="top">
        <h2 className="title">Top 10 Songs</h2>
        <button className="addSong"> + Add Song</button>

        </div>
       
        <div className="card">
        <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        
        
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
      </table>
        </div>
        <h2 className="title">Top 10 Artist</h2>
        <div className="card">
        <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Rating</th>
        </tr>
        
        
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
          <td>5</td>
        </tr>
      </table>
        </div>
        


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
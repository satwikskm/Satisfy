import React, { useEffect } from 'react'
import { useState} from 'react'
import Modal from 'react-modal';
import './home.css'
import Songs from '../songs/songs';


const Home = () => {

    

    const [data,setData] = useState([])
    const [modal,setModal]=useState(false)
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
       
        <div className="top">
        <h2 className="title">Top 10 Songs</h2>
        <button className="addSong" onClick={()=>setModal(true)}> + Add Song</button>
        <Modal isOpen={modal}>
          <Songs cancel={setModal}/>
        
        </Modal>
        

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
import React from 'react'
import axios from "axios";
import Modal from 'react-modal';
import { useState } from "react";
import Artist from '../artist/artist';
import './songs.css'

const Songs = (props) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [artist, setArtist] = useState("");
    const [modal,setModal]=useState(false)
    const[message,setMessage]=useState("")

    const submitHandler = async (e) =>{
        e.preventDefault()
        console.log("Submitted")
        console.log(name,date)
        try {

          let data = JSON.stringify({
            "name": name,
            "DOR": date,
            "Artist":artist
          });
          
          let config = {
            method: 'post',
            url: 'http://localhost:3000/addSongs',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
            
            
          } catch (err) {
            console.log(err);
          }
          setName("");
          setDate("");
        

    }
    
  return (
    <div>
        <h1>Add Songs</h1>
        <section>
          <Modal isOpen={modal}>
          <button onClick={()=>setModal(false)}>X</button>
              <Artist cancel={setModal}/>
              
          </Modal>
        <form onSubmit={submitHandler}>
          <div className="songName">
          <label htmlFor="songName">Song Name</label>

            <input 
              type="text"
              onChange={(e)=>setName(e.target.value)}

            />

          </div>

          <div className="dor">
          <label htmlFor="songName">Date of Release </label>
            <input 
            type="text"
            onChange={(e)=>setDate(e.target.value)}
            />

          </div>
        
            
            <div className="artist">
            <label htmlFor="songName">Artist</label>
                <input 
                type="text" 
                onChange={(e)=>setArtist(e.target.value)}
                />
                <button 
                type='button'
                onClick={()=>setModal(true)}>+ Artist</button>
            </div>

            <div className="btn">
            <button className='save' type='submit' onClick={()=>console.log("click")}>Save</button>
            <button 
            type='button'
            className="cancel"
            onClick={()=>props.cancel(false)}
            >Cancel</button>

            </div>
            

        </form>
            
                
            
        

        </section>
        
    </div>
  )
}

export default Songs
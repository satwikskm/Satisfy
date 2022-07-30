import React from 'react'
import axios from "axios";
import { useState } from "react";

const Songs = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [artist, setArtist] = useState("");
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
        <h1>Forms</h1>
        <section>
        <form onSubmit={submitHandler}>
        <label htmlFor="songName">Song Name</label>
            <input 
            type="text"
            onChange={(e)=>setName(e.target.value)}
           
            />
            <label htmlFor="songName">Date of Release </label>
            <input 
            type="text"
            onChange={(e)=>setDate(e.target.value)}
            />
            <div className="artist">
            <label htmlFor="songName">Artist</label>
                <input 
                type="text" 
                onChange={(e)=>setArtist(e.target.value)}
                />
                <button>+ Artist</button>
            </div>
            <button className='save' type='submit' onClick={()=>console.log("click")}>Save</button>
                <button className="cancel">Cancel</button>

        </form>
            
                
            
        

        </section>
        
    </div>
  )
}

export default Songs
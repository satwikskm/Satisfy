import React from 'react'
import { useState } from "react";
import axios from "axios";
import './artist.css'
const Artist = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [bio, setBio] = useState("");

    const submitHandler = async (e) =>{
        e.preventDefault()
        console.log("Submitted")
        console.log(name,date)
        try {

          let data = JSON.stringify({
            "name": name,
            "DOR": date,
            "Bio":bio
          });
          
          let config = {
            method: 'post',
            url: 'http://localhost:3000/addArtists',
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
    <section>
        <form onSubmit={submitHandler}>
          <div className="songName">
          <label htmlFor="songName">Artist Name</label>

            <input 
              type="text"
              onChange={(e)=>setName(e.target.value)}

            />

          </div>

          <div className="dob">
          <label htmlFor="songName">Date of Birth </label>
            <input 
            type="text"
            onChange={(e)=>setDate(e.target.value)}
            />

          </div>
        
            
            <div className="bio">
            <label htmlFor="songName">Bio</label>
                <input 
                type="text" 
                onChange={(e)=>setBio(e.target.value)}
                />
                
            </div>

            <div className="btn">
            <button className='save' type='submit' onClick={()=>console.log("click")}>Save</button>
            <button 
            type='button'
            className="cancel"
            onClick={()=>console.log('cancel')}
            >Cancel</button>

            </div>
            

        </form>
            
                
            
        

        </section>
  )
}

export default Artist
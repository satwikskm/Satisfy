const express = require('express')
const cors = require('cors')
// const pool = require('./db/pgadmin/db')
const mongo = require('./db/mongo/mongo')

const app = express()
// let sid = 3
// let aid = 3
// middleware

app.use(cors())
app.use(express.json())

// Connections 



app.post('/addSongs',async(req,res)=>{

    try {
       
        console.log(req.body)
        
        // sid = Number(sid)
        // const {name,dor,cover,rating}=req.body
        // dob=new Date(dor)
        // const newSong = await pool.query("INSERT INTO SONGS VALUES($1,$2,$3,$4)",[sid,name,dor,cover])
        return res.json("added")
        
    } catch (error) {
        console.log(error)
        return res.json(error)
        


        
    }

})

app.post('/addArtists',async(req,res)=>{

    try {
        aid+=1
        console.log(req.body)
        
        // aid = Number(aid)
        // const {name,dob,bio}=req.body
       
        // const newSong = await pool.query("INSERT INTO ARTISTS VALUES($1,$2,$3,$4)",[aid,name,dob,bio])
        return res.json(newSong)
        
    } catch (error) {
        console.log(error)
        return res.json(error)
        


        
    }

})


// app.post('/user',async(req,res)=>{

//     try {
//         sid+=1
//         console.log(req.body)
        
//         sid = Number(sid)
//         const {name,dor,cover,rating}=req.body
//         dob=new Date(dor)
//         const newSong = await pool.query("INSERT INTO SONGS VALUES($1,$2,$3,$4)",[sid,name,dor,cover])
//         return res.json(newSong)
        
//     } catch (error) {
//         console.log(error)
//         return res.json(error)
        


        
//     }

// })


app.get('/getSongs',async(req,res)=>{

    try {
        
        return res.json("got it")
        
    } catch (error) {
        console.log(error)
        return res.json(error)
        


        
    }

})

// app.get('/getArtists',async(req,res)=>{

//     try {
//         const song = await pool.query("SELECT * FROM ARTISTS")
//         return res.json(song.rows)
        
//     } catch (error) {
//         console.log(error)
//         return res.json(error)
        


        
//     }

// })

app.listen(3000,()=>{
    console.log("Server at 3000")
    
})

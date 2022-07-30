const Pool = require('pg').Pool

const pool = new Pool ({
    user:"newuser",
    password:"password",
    host:"localhost",
    port:5432,
    database:"Music"
})

pool.connect()

pool.on('connect',()=>{
  console.log("Connected")
})

pool.on('end',()=>{
  console.log("Connection closed")
})




module.exports = pool
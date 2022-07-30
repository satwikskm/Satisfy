const mongo = require("mongoose")


mongo.connect("mongodb://127.0.0.1:27017/NewDatabase",{
    useNewUrlParser: true, 

    useUnifiedTopology: true 


}).then(()=>{
    console.log("Mongodb Connected....")
}).catch((err)=>{
    console.log(err)
});



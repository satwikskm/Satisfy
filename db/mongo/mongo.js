const mongo = require("mongoose")


mongo.connect("mongodb://127.0.0.1:27017/assignment",{
    useNewUrlParser: true, 
    useUnifiedTopology: true 


}).then(()=>{
    console.log("Mongodb Connected....")
}).catch((err)=>{
    console.log(err)
});

const newAssignment = new mongo.Schema({
    user:{
        userName:{
            type:String,
            required:true

        },
        email:{
            type:String,
            required:true
        },
        rating:{
            type:Array
        }

    },
    songs:{
        name:{
            type:String
            

        },
        cover:{
            type:String
            
        },
        dor:{
            type:Date,
            default:Date.now()
        },
        artist:{
            type:Array
        }

    },
    artist:{
        name:{
            type:String
            

        },
        dob:{
            type:Date,
            default:Date.now()
        },
        bio:{
            type:String
        },
        song:{
            type:Array
        }

    }



})

const AssignmentModel = new mongo.model("AssignmentModel",newAssignment)

const createDoc = async() =>{
    try {
        const value = new AssignmentModel({
            user:{
                userName:"satwik",
                email:"satwik@gmail.com",
                rating:[{song1:5}]
            },
            songs:{
                name:"Tera Yakin Kyu Maine Kiya Nehi",
                cover:"url",
                dor:new Date(12,2,2014),
                artist:["Mustafa zaid"]
            },
            artist:{
                name:"Mustafa zaid",
                dob:new Date(12,2,1985),
                bio:"A great Singer",
                song:["Awarapan"]
            }
            
        })
        const result = value.save()
        console.log(result)
        
    } catch (error) {
        console.log(error)
        
    }
    
}

const getDocument = async()=>{
    const result = await AssignmentModel.find({"user.userName":{$eq:'satwik'}})
    console.log(result)

}


getDocument()
console.log(mongo.connection)
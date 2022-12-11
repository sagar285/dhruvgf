const mongoose=require("mongoose");

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://localhost:27017/mitsdatabase').then(()=>{
    console.log("connection succesful");
}).catch((err)=>{
    console.log(err);
})

const registerschema = new mongoose.Schema ({
    name:{
        type:String ,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
         default:1234567890,
        
    },
    timing:{
        type:Number,
        required:true,
    }
});

const register = mongoose.model("Register",registerschema);

module.exports=register;
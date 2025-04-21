const mongoose = require("mongoose");
const mongo_URL = "mongodb://localhost:27017/FSD-IT-B";
mongoose.connect(mongo_URL)
.then(()=>{
  console.log("MONGODB Connected Successfully");
})
.catch(err=>{
  console.log("DB Error",err.message);
})
const userSchema = new mongoose.Schema({
  name:{type: String,required:true},
  email:{type: String , required: true},
  age: {type: Number , required: true}
  
});
const User = mongoose.model("userdata",userSchema);
const createUser = async()=>{
  try{
    const newUser = new User({
      name:"Abhi" , email:"abhinavjaipanwar@gmail.com" , age:22
    });
    const user = await newUser.save();
    console.log("User Created Successfully",user);
  }
  catch(err){
    console.log("User Creation Error",err.message)
  }
}
createUser();
const getUser = async()=>{
  try{
    const users= await User.find();
    console.log("User Data",users);
  }
  catch(err){
    console.log("User Data Error",err.message);
  }
}
//getUser();
const updateUser = async() => {
  try{
      const updateuserdata = await User.findOneAndUpdate({name: "Abhinav"}, {$set: {name: "Aryan gupta"}},{new:true});
      console.log("User data Updated")
  }
  catch(err){
    console.log("User data Update Error",err.message);

    }
}
//updateUser();
const deleteUser = async() => {
  try{
    await User.deleteOne({name:"abhi"});
    console.log("User Deleted Successfully");
    }
    catch(err){
      console.log("User Deletion Error",err.message);
      }
      }
      //deleteUser();
      const app=async()=>{
        await createUser();
        await getUser();
        await updateUser();
        await deleteUser();

      }
      app();

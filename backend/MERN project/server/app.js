const express=require("express");
const app=express();
const port=3002;
const users=[
    {
        id:1001,
        name:"aryan",
        email:"aryan@gmail.com",
        password :"aryan",
    
    }
  
]
app.use(express.json())
app.get("/users",(req,res)=>{
    res.status(200);
    res.json(users);
    
})

app.post("/user",(req,res)=>{
    const {name,email,password}=req.body;
    const newid=users.length>0? users[users.length-1].id+1 :1001 ;
    const newuser={
        id:newid,name,email,password
    }
    users.push(newuser);
    req.status(201);
    res.json({status:"succes",message:"user created successfully"})
})

app.listen(port,(err)=>{
try{
    if(err) throw err;
   else {
    console.log(`Server is running on port 3002  ${port}`);
}
}
catch(err){
    console.log("server error:", err.message);
}
})


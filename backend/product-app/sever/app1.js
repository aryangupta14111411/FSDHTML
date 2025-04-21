const express=require("express");
const app=express();
const port=3000;
let user=[];
app.get("user",(req,res)=>{
    res.status(200).json(users);
})
app.get("/user/:id",(req,res)=>{
    
    const uid=req.params.id;
    const index=user.findindex(ind=>ind.id==uid)
    if (index==-1){
        res.status(404).json({"message":"User not found"});
        }
        else{
            user[index].name=newname;
            user[index].email=newemail;
            res.status(200).json({status:"success",message:"user not found",data:user[index]

            });
        }
    }
)
app.get("/user",(req,res)=>{})
app.get("/user/:id",(req,res)=>{})
app.get("/createuser",(req,res)=>{})
app.get("/edituser/:id",(req,res)=>{}){
const uid=req.params.id;
const index=user.findIndex(ind=>ind.id==uid)
if{



    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




    
}
app.get("/deleteuser/:id",(req,res)=>{})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
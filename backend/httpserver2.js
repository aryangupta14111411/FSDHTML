consthttp=require("http");
const port=3005;
const server=HTMLOutputElement.createServer((req,res)=>{
    const data=fetch("")


})
server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log(`Server is running on port ${port}`);
    }
    catch(err){
        console.log(" Server error :" ,err.message);
    }
})
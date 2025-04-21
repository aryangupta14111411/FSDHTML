const http= require('http');
const fs= require('fs/promises');



const server=http.createServer(async(request,response)=>{
    response.setHeader("Content-Type","text/html");
     const url = request.url;
     if(url=="/home"){
        const home= await fs.readFile("home.html");
        response.write(home);
     }
     else if(url=="/about"){
        const about= await fs.readFile("about.html");
        response.write(about);
     }
     else{

        response.write("404 Error Page");
     }
   
    
    response.end();
  
})

server.listen(3001,(err)=>{
    try{
        if(err) throw err;
        console.log("Server is running on port 3001");
        
    }
    catch(err){
        console.log("Server Error: ",err.message);
    }
   

})
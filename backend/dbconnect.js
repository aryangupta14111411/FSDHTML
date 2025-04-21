const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";
MongoClient.connect(url)
.then(client=>{
    console.log("Connected to Database");
})
.catch(err=>{
    console.log("DB Error", err.message)
})
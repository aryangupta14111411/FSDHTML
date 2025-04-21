const express = require('express');
const app= express();
const port = 3000;


const products =[{
    id:1,
    productName:"Parle-G",
    price:100,
    quantity:100,

},
{
    id:2,
    productName:"Haldiram Bhujia",
    price:150,
    quantity:50,  
}
,{
    id:3,
    productName:"Kurkure",
    price:25,
    quantity:150,
}]

app.use(express.json());

//GET API
app.get("/products",(req,res)=>{
    res.status(200);
    res.json(products);
})

//POST API
app.post("/products",(req,res)=>{
    const{id,productName,price,quantity}=req.body;
    const newId =products.length>0? products[products.length-1].id+1:1; 
    const newProduct ={
        id:newId,productName,price,quantity
    }
    products.push(newProduct);
    res.json({status:"success",message:"New Product added successfully"})
})

app.listen(port,(err)=>{
    try {
        if (err) throw err;
        console.log(`Server is running on port ${port}`);

    }
    catch(err){
        console.log("Server error: ",err.message);


    }

   

})
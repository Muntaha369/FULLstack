const express= require('express');
const app=express();
const cors=require('cors')
const PORT=3009

app.use(cors())

app.get('/',((req,res)=>{
 return res.json({message:"Hello from server"})
}))

app.listen(PORT,()=>{console.log(`Port is running on port ${PORT}`)})

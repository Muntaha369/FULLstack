const express = require('express')
const app = express()
const router = require('./routes/auth-router')
const PORT=8090

app.use('/api/auth',router)

app.get('/',(req,res)=>{
  res.send("Hello");
})

app.listen(PORT,()=>{
  console.log(`port running on ${PORT}`)
})
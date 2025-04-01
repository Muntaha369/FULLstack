const express = require('express')
const app = express()
const router = require('./routes/auth-router')
const ConnectDb = require('./utils/db')
const PORT=8090

app.use(express.json())

app.use('/api/auth',router)

app.get('/',(req,res)=>{
  res.send("Hello");
})

ConnectDb().then(()=>{
app.listen(PORT,()=>{
  console.log(`port running on ${PORT}`)
})
})
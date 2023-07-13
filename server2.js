let express=require('express')
let cors=require('cors')

// import express from 'express'
let app=express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.json({user:"yuva"})
})
app.post('/post',(req,res)=>{

fs.readFile('./file.json',{encoding:'uytf-8'},(err,data)=>{
    if(err) throw err;
    console.log
})
})
app.listen('3001',()=>{
    console.log('run server')
})



// app.put('/',(req,res)=>{
//     res.send('server')
// })




// app.delete('/',(req,res)=>{
//     res.send('server')
// })
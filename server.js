let express=require('express')
let app=express()


app.get('/',(req,res)=>{
    res.send("server")
})
app.listen('3000',()=>{
    console.log('server run')
})
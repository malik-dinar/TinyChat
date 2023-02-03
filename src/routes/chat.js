const express = require('express')
const path = require('path')
const router = express.Router()
publicDirectory = path.join(__dirname,'../../public/')

router.get('/',(req,res)=>{
    res.sendFile('/index/')
})

router.get('/home',(req,res)=>{
    res.sendFile('home.html', { root: publicDirectory});
})


module.exports = router
const router = require('express').Router()
const Model = require('./model')
const People = require('../USERS/People')
const {validation} = require("./utils")
router.get("/getData",(req,res)=>{
  
  const obj = new Model()
  obj._getData().then((data)=>{
    return res.status(200).json(data)
  }).catch((error)=>{
    console.log(error)
    return res.status(500).json({message:`Failed to get data`})
  })
})


router.post("/createData",(req,res)=>{
   const inputs={
     id :People.length+1,
     name:req.body.name,
     email:req.body.email,
     status :req.body.status,
   }
 const {errors,DataForm} = validation(inputs)
 if(!DataForm) return res.status(400).json(errors)

 People.push(inputs)
return res.status(200).json(People)
})

router.get("/ec2-test",(req,res)=>{
  res.send("<h1>API-TEST-AWS-EC2</h1>")
})

module.exports = router

const express=require('express')
const router=express.Router()
const homeController=require('../controller/home-controller')


// مسیر اصلی
router.get("/", homeController.getHome );

module.exports=router
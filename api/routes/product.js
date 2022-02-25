const express=require("express");
const router=express.Router();
const ProductController=require("../controllers/product");

router.get("", ProductController.getproducts);
module.exports=router;

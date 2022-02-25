const Product=require("../models/product");


exports.getproducts=(req, res, next) => {
    const pageSize= +req.query.pagesize;
    const currentPage= +req.query.page;
    const productQuery=Product.find();
    let fetchedproduct;
  if(pageSize && currentPage)
  {
    productQuery.skip(pageSize * (currentPage-1))
    .limit(pageSize);
  }
  productQuery.then(documents=>{
    console.log(documents);
    fetchedproduct=documents;
    return Product.count();

  }).then(count=>{
    res.status(200).json({
      message: "Product fetched successfully!",
      products: fetchedproduct,
      maxProducts:count,
    });
  })
  .catch(error=>{
    res.status(500).json({
      message:"Couldn't fetched product!"
      });
    });
  };    

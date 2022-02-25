const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  // id:{type:Number},
  product_id: { type: Number, ref: "product_id", required: true, unique: true },
  category_id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String },
  productunique_id: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  // unique_id:{type:String},
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: String, required: true },
  created_date: { type: Date, default: Date.now, required: true },
  modified_date: { type: Date, default: null },
  delete_date: { type: Date, default: null },
  status: { type: Boolean, default: true, required: true },
});

module.exports = mongoose.model("Product", productSchema);

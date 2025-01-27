const mongo = require("mongoose");

const foodCatSchema = mongo.Schema({
  CategoryName: {
    type: String,
    required: true,
    unique: true, // التأكد من أن كل فئة لها اسم فريد
  },
});

module.exports = mongo.model("FoodCat", foodCatSchema);

const mongo = require("mongoose");
const { Schema } = mongo;
const foodItemSchema = Schema({
  CategoryName: {
    type: String,
    required: true, // يجب أن يكون هذا الصنف موجودًا
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    small: {
      type: Number,
      required: true,
    },
    half: {
      type: Number,
      required: true,
    },
    large: {
      type: Number,
      required: true,
    },
  },

  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongo.model("food_item", foodItemSchema);

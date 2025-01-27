global.foodData = require("./db")((err, data, CatData) => {
  if (err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
});
// const FoodItem = require("./models/Food_items");
const express = require("express");
const app = express();
const path = require("path");
const port = 5000;
// const url = `http://localhost:${port}`;

app.use("/static", express.static(path.join(__dirname, "/image")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", require("./Routes/Auth"));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
// const foodItems = [
//   {
//     name: "Grilled Chicken",
//     CategoryName: "Barbecue",
//     img: `${url}/static/istockphoto-2080709404-612x612.webp`,
//     options: {
//       small: 100,
//       half: 150,
//       large: 200,
//     },
//     description: "Juicy and flavorful grilled chicken with smoky spices.",
//   },
//   {
//     name: "Cheeseburger",
//     CategoryName: "Fast Food",
//     img: `${url}/static/Cheeseburger.webp`,
//     options: {
//       small: 80,
//       half: 120,
//       large: 160,
//     },
//     description:
//       "Classic cheeseburger topped with fresh lettuce, tomatoes, and cheddar cheese.",
//   },
//   {
//     name: "Shawarma Wrap",
//     CategoryName: "Middle Eastern",
//     img: `${url}/static/Shawarma Wrap.webp`,
//     options: {
//       small: 50,
//       half: 80,
//       large: 100,
//     },
//     description:
//       "Delicious wrap filled with seasoned chicken, veggies, and garlic sauce.",
//   },
//   {
//     name: "Veggie Pizza",
//     CategoryName: "Italian",
//     img: `${url}/static/Veggie Pizza.webp`,
//     options: {
//       small: 90,
//       half: 140,
//       large: 180,
//     },
//     description:
//       "Fresh and healthy pizza topped with bell peppers, olives, and mushrooms.",
//   },
//   {
//     name: "Beef Steak",
//     CategoryName: "Steaks",
//     img: `${url}/static/Beef Steak.webp`,
//     options: {
//       small: 150,
//       half: 250,
//       large: 350,
//     },
//     description:
//       "Perfectly cooked beef steak served with mashed potatoes and gravy.",
//   },
//   {
//     name: "Falafel Platter",
//     CategoryName: "Middle Eastern",
//     img: `${url}/static/Falafel Platter.webp`,
//     options: {
//       small: 60,
//       half: 100,
//       large: 140,
//     },
//     description:
//       "Crispy falafel served with hummus, pita bread, and fresh salad.",
//   },
//   {
//     name: "Ice Cream Sundae",
//     CategoryName: "Desserts",
//     img: `${url}/static/Ice Cream Sundae.webp`,
//     options: {
//       small: 40,
//       half: 70,
//       large: 100,
//     },
//     description:
//       "Creamy vanilla ice cream topped with chocolate syrup and sprinkles.",
//   },
//   {
//     name: "Chicken Tikka",
//     CategoryName: "Barbecue",
//     img: `${url}/static/Chicken Tikka.webp`,
//     options: {
//       small: 110,
//       half: 160,
//       large: 220,
//     },
//     description: "Spicy and tender chicken tikka cooked over a charcoal grill.",
//   },
//   {
//     name: "Pasta Alfredo",
//     CategoryName: "Italian",
//     img: `${url}/static/Pasta Alfredo.webp`,
//     options: {
//       small: 120,
//       half: 180,
//       large: 240,
//     },
//     description:
//       "Creamy pasta tossed with Alfredo sauce and topped with parmesan cheese.",
//   },
//   {
//     name: "Mixed Grill Platter",
//     CategoryName: "Barbecue",
//     img: `${url}/static/Mixed Grill Platter.webp`,
//     options: {
//       small: 200,
//       half: 300,
//       large: 400,
//     },
//     description: "A delicious mix of grilled chicken, beef, and lamb skewers.",
//   },
// ];
// FoodItem.insertMany(foodItems)
//   .then(() => {
//     console.log("Data inserted successfully");
//   })
//   .catch((err) => {
//     console.log("Error inserting data: ", err);
//   });

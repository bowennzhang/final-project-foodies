// Require MongoClient
const { MongoClient } = require("mongodb");

// Access the database with the `uri` saved in the `.env` file
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//JSON Data
const restaurants = require("./data/restaurant.json");
const bars = require("./data/bars.json");
const coffee = require("./data/coffee.json");
const shopping = require("./data/shopping.json");

// Batch import the items and companies data in MongoDB
const batchImport = async () => {
  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    // Connect to database
    const db = client.db("foodies");

    // Declare 'allRestaurants' variable and transfer all flights information to 'restaurants' collection in MongoDB
    const allRestaurants = await db
      .collection("restaurants")
      .insertMany(restaurants);

    // Declare 'allBars' variable and transfer all flights information to 'bars' collection in MongoDB
    const allBars = await db.collection("bars").insertMany(bars);

    // Declare 'allBars' variable and transfer all flights information to 'bars' collection in MongoDB
    const allCoffee = await db.collection("coffee").insertMany(coffee);

    // Declare 'allBars' variable and transfer all flights information to 'bars' collection in MongoDB
    const allShopping = await db.collection("shopping").insertMany(shopping);

    // Close database server connection
    client.close();
  } catch (err) {
    console.log("Error. Cannot transfer data.");
  }

  console.log("Disconnected");
};

// Call batchImport function
batchImport();

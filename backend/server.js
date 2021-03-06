"use strict";

// Connect to MongoDB
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

const {
  getRestaurants,
  getCoffee,
  getBars,
  getShopping,
  getSingleStore,
  getAllStore,
  getStoreDetailsFromAll,
  getAllStoreForSearchBar,
} = require("./handlers");

const {
  addUser,
  addComment,
  updateFavorites,
  getComment,
  getFavorites,
 
} = require("./userHandlers");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // fetch data from mongodb
  .get("/api/get-restaurants", getRestaurants)
  .get("/api/get-coffee", getCoffee)
  .get("/api/get-bars", getBars)
  .get("/api/get-shopping", getShopping)

  .get("/api/get-store/:id", getSingleStore)

  .get("/api/get-allStore", getAllStoreForSearchBar)

  // fetch data from api
  .get("/api/get-all/:page", getAllStore)
  .get("/api/get-all/:page/:id", getStoreDetailsFromAll)

  // Auth0
  // .get("/api/archives/:user", getArchive)
  .post("/api/add-user", addUser)

  .post("/api/new-comment", addComment)
  .get("/api/get-comment", getComment)

  .post("/api/update-favorites", updateFavorites)
  .get("/api/get-favorites/:email", getFavorites)
  
  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));

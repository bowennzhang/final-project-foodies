"use strict";
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// import axios from "axios";
const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI, YELP_API_KEY } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getRestaurants = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("foodies");
    const allRestaurants = await db.collection("restaurants").find().toArray();

    client.close();

    res.status(200).json({ status: 200, data: allRestaurants });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getCoffee = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("foodies");
    const allCoffee = await db.collection("coffee").find().toArray();

    client.close();

    res.status(200).json({ status: 200, data: allCoffee });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getBars = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("foodies");
    const allBars = await db.collection("bars").find().toArray();

    client.close();

    res.status(200).json({ status: 200, data: allBars });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getShopping = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("foodies");
    const allShopping = await db.collection("shopping").find().toArray();

    client.close();

    res.status(200).json({ status: 200, data: allShopping });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getSingleStore = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("foodies");

    const id = req.params.id;

    const singleStore = await db.collection("allStores").findOne({ id });

    res.status(200).json({ status: 200, id, data: singleStore });

    client.close();
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getAllStore = async (req, res) => {
  const yelpUrl =
    "https://api.yelp.com/v3/businesses/search?term=restaurants&location=montreal&limit=20";

  try {
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        Origin: "http://localhost:3000",
        "Content-Type": "application/json",
        withCredentials: true,
      },
    };

    const response = await fetch(yelpUrl, apiOptions);
    const data = await response.json();

    console.log(data);

    res.status(200).json({ status: 200, data });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getStoreDetailsFromAll = async (req, res) => {
  const yelpUrl =
    "https://api.yelp.com/v3/businesses/search?term=restaurants&location=montreal&limit=20";

  try {
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        Origin: "http://localhost:3000",
        "Content-Type": "application/json",
        withCredentials: true,
      },
    };

    const response = await fetch(yelpUrl, apiOptions);
    const data = await response.json();
    // console.log(data);
    const id = req.params.id;
    // console.log(Object.entries(data));
    // console.log(id);
    // const data1 = data.businesses;
    // console.log(data1);
    const result = Object.entries(data);
    const result2 = result[0];
    const result3 = result2[1];

    const result4 = result3.filter((match) => {
      return id === match.id;
    });
    console.log(result4);

    res.status(200).json({ status: 200, id, result4 });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

module.exports = {
  getRestaurants,
  getCoffee,
  getBars,
  getShopping,
  getSingleStore,
  getAllStore,
  getStoreDetailsFromAll,
};

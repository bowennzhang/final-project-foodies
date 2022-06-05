"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;

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

module.exports = { getRestaurants, getCoffee, getBars, getShopping };

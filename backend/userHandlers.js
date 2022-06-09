"use strict";

const { MongoClient } = require("mongodb");

const dotenv = require("dotenv");

dotenv.config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getArchive = async (req, res) => {
  try {
    const { user } = req.params;
    const client = new MongoClient(MONGO_URI, options);

    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("color-persona");
    console.log("CONNECTED");
    // check if the client already exists in the db

    const allUsersInfo = await db.listCollections().toArray();
    const users = allUsersInfo.map((i) => i.name);
    let ifUserExists = users.includes(user);
    if (!ifUserExists) {
      //if new user, create his archive collection
      await db.createCollection(user);
      await db.collection(user).insertOne({ _id: "My Archive" });
      const userArchives = await db.collection(user).find().toArray();
      await client.close();
      return res.status(200).json({
        status: 200,
        // data: currentStock,
        data: userArchives,
        new_user: true,
      });
    } else {
      //if old user, get his archive directly

      const userArchives = await db.collection(user).find().toArray();
      await client.close();
      return res.status(200).json({
        status: 200,
        data: userArchives,
        new_user: false,
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: 400,
      // data: currentStock,
      message: err.message,
    });
  }
};

const addUser = async (req, res) => {
  const user = req.body;

  const client = new MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("foodies");

  const checkId = { _id: user.user.sub };
  const update = {
    $set: {
      _id: user.user.sub,
      given_name: user.user.given_name,
      family_name: user.user.family_name,
      nickname: user.user.nickname,
      name: user.user.name,
      picture: user.user.picture,
      locale: user.user.locale,
      updated_at: user.user.updated_at,
      email: user.user.email,
      email_verified: user.user.email_verified,
    },
  };
  const upsert = { upsert: true };
  const result = await db
    .collection("users")
    .updateOne(checkId, update, upsert);

  client.close();

  result.modifiedCount === 0
    ? res.status(201).json({
        status: 201,
        data: user.user.sub,
        message: "User added to MongoDb!",
      })
    : res.status(404).json({ status: 404, message: "User was already added!" });
};

const updateFavorites = async (req, res) => {
  let favArray = [];

  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db("foodies");
  const result = await db
    .collection("users")
    .findOne({ email: req.query.email });

  if (!result.favorites || result.favorites.length === 0) {
    favArray = [{ id: req.query.id }];
  } else if (result.favorites.some((el) => el.id === req.query.id)) {
    favArray = result.favorites.filter((el) => el.id !== req.query.id);
  } else {
    favArray = [...result.favorites, { id: req.query.id }];
  }
  const updatedResult = await db
    .collection("users")
    .updateOne({ email: req.query.email }, { $set: { favorites: favArray } });

  client.close(); // console.log('whats going on', updatedResult);

  updatedResult.modifiedCount === 1
    ? res
        .status(200)
        .json({ status: 200, data: favArray, message: "updated faves" })
    : res.status(404).json({ status: 404, data: "Not Found" });
};

// export handler function
module.exports = { getArchive, addUser, updateFavorites };

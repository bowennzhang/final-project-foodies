"use strict";

const { MongoClient } = require("mongodb");

const dotenv = require("dotenv");

dotenv.config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

////////////////////////////////////////////////////////////////
const addComment = async (req, res) => {
  const { user, comment, email, name, url } = req.body;

  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db("foodies");

  const result = await db.collection("users").updateOne(
    { email: email },
    {
      $push: {
        comments: { user: user, comment: comment, name: name, url: url },
      },
    }
  );

  result.modifiedCount === 1
    ? res.status(200).json({ status: 200, data: result })
    : res.status(404).json({ status: 404, message: "Comment was not added." });

  client.close();
};

////////////////////////////////////////////////////////////////
const getComment = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("foodies");

    const comments = await db.collection("users").find().toArray();

    client.close();

    res.status(200).json({ status: 200, data: comments.reverse() });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

////////////////////////////////////////////////////////////////

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
  } else if (result.favorites.some((el) => el.id === req.body.id)) {
    favArray = result.favorites.filter((el) => el.id !== req.body.id);
  } else {
    favArray = [...result.favorites, { id: req.body.id, name: req.body.name }];
  }
  const updatedResult = await db
    .collection("users")
    .updateOne({ email: req.query.email }, { $set: { favorites: favArray } });

  client.close();

  updatedResult.modifiedCount === 1
    ? res
        .status(200)
        .json({ status: 200, data: favArray, message: "updated faves" })
    : res.status(404).json({ status: 404, data: "Not Found" });
};

// export handler function
module.exports = { addUser, addComment, getComment, updateFavorites };

const express = require("express");
const db = require("../db");
const request = require("request");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const router = express.Router();

router.get("/posts", async (req, res, next) => {
  try {
    let Results = await db.allPosts();
    let postArray = Array.from(Results);
    res.json(postArray);
  } catch (e) {
    console.log(e);
    res.sentStatus(500);
  }
});
router.get("/users", async (req, res, next) => {
  try {
    let Results = await db.allUsers();
    let userArray = Array.from(Results);
    res.json(userArray);
  } catch (e) {
    console.log(e);
    res.sentStatus(500);
  }
});
router.post("/newUser", (request, response, next) => {
  let password = request.body.password;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;
    request.body.password = hash;
    db.postUser(request.body);
    response.json(db);
  });
});
router.post("/login", (request, response, next) => {
  bcrypt.compare(request.body[0], request.body[1], function (err, res) {
    if (err) throw err;
    if (res) response.send("Success");
    else response.send("Failure");
  });
});

router.post("/newPost", (request, response, next) => {
  request.body.visibility = false ? 0 : 1;
  db.postPost(request.body);
  response.json(db);
});

router.post("/newExpert", (request, response, next) => {
    let password = request.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) throw err;
      request.body.password = hash;
      db.postExpert(request.body);
      response.json(db);
    });
  });

  router.get("/posts/:verified", async (req, res, next) => {
    try {      
      let Results = await db.visiblePosts(req.params.verified);
      let postArray = Array.from(Results);
      res.json(postArray);
    } catch (e) {
      console.log(e);
      res.sentStatus(500);
    }
  });

  router.get("/replies/:c_id", async (req, res, next) => {
    try {      
      let Results = await db.getReplies(req.params.c_id);
      let postArray = Array.from(Results);
      res.json(postArray);
    } catch (e) {
      console.log(e);
      res.sentStatus(500);
    }
  });

module.exports = router;

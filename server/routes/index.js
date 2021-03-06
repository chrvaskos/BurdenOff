const express = require("express");
const db = require("../db");
const bcrypt = require("bcrypt");
const saltRounds = 12;

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
    if (err) return err;
    request.body.password = hash;
    db.postUser(request.body);
    response.json(db);
  });
});
router.post("/login", (request, response, next) => {
  bcrypt.compare(request.body[0], request.body[1], function (err, res) {
    if (err) return err;
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
    if (err) return err;
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
    let replyArray = Array.from(Results);
    res.json(replyArray);
  } catch (e) {
    console.log(e);
    res.sentStatus(500);
  }
});

router.get("/conv/:user_id", async (req, res, next) => {
  try {
    let Results = await db.getConv(req.params.user_id);
    let convArray = Array.from(Results);
    res.json(convArray);
  } catch (e) {
    console.log(e);
    res.sentStatus(500);
  }
});

router.get("/user/:id", async (req, res, next) => {
  try {
    let Results = await db.getOne(req.params.id);
    let oneArray = Array.from(Results);
    res.json(oneArray);
  } catch (e) {
    console.log(e);
    res.sentStatus(500);
  }
});

router.post("/newReply", (request, response, next) => {
  db.postReply(request.body);
  response.json(db);
});

router.post("/newConv", (request, response, next) => {
  db.postConv(request.body);
  response.json(db);
});

router.put("/putPost", (request, response, next) => {
  db.updatePost(request.body);
  response.json(db);
});

router.put("/putSolution", (request, response, next) => {
  db.putSolution(request.body);
  response.json(db);
});

router.delete("/deletePost", (request, response, next) => {
  db.deletePost(request.body);
  response.json(db);
});

router.get("/expert", async (req, res, next) => {
  try {
    let Results = await db.getExperts();
    let expertArray = Array.from(Results);
    res.json(expertArray);
  } catch (e) {
    console.log(e);
    res.sentStatus(500);
  }
});

router.put("/putVerify", (request, response, next) => {
  if (request.body.verified === 1) {
    request.body.verified = 0;
  } else {
    request.body.verified = 1;
  }
  db.updateVerify(request.body);
  response.json(db);
});

router.get("/emailusername", async (req, res, next) => {
  try {
    let Results = await db.getEmailUsername();
    let expertArray = Array.from(Results);
    res.json(expertArray);
  } catch (e) {
    console.log(e);
    res.sentStatus(500);
  }
});

router.get("/post/:id", async (req, res, next) => {
  try {
    let Results = await db.getMyPosts(req.params.id);
    let myPostArray = Array.from(Results);
    res.json(myPostArray);
  } catch (e) {
    console.log(e);
    res.sentStatus(500);
  }
});

module.exports = router;

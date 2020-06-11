const express = require("express");
const db = require("../db");
const request = require('request');

const router = express.Router();

router.get("/posts", async (req, res, next) => {
    
    try{
        console.log("I was in posts boy");
        let Results = await db.allPosts();
        let postArray= Array.from(Results);
        res.json(postArray);

    }catch(e){
        console.log(e);
        res.sentStatus(500);
    }
   

});
router.get("/users", async (req, res, next) => {
    
    try{
        let Results = await db.allUsers();
        let userArray= Array.from(Results);
        res.json(userArray);

    }catch(e){
        console.log(e);
        res.sentStatus(500);
    }
   

});
router.post("/newUser", (request,response,next) =>{
 
    db.postUser(request.body);
    response.json(db);
   
})


module.exports = router;

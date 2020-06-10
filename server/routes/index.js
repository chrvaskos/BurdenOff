const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/posts", async (req, res, next) => {
    
    try{
        let Results = await db.allPosts();
        let postArray= Array.from(Results);
        res.json(postArray);

    }catch(e){
        console.log(e);
        res.sentStatus(500);
    }
   

});
router.post("/newUser", async(req,res,next) =>{
    try{
        let Result = await db.postUser();           
        res.json(Result);

    }catch(e){
        console.log(e);
        res.sentStatus(500);
    }
   
})

module.exports = router;

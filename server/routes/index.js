const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
    
    try{
        let Results = await db.all();
        let postArray= Array.from(Results);
        res.json(postArray);

    }catch(e){
        console.log(e);
        res.sentStatus(500);
    }
   

});

module.exports = router;

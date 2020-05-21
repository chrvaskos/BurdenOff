const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
    
    try{
        let Results = await db.all();
        let Arraypap= Array.from(Results);
        res.json(Arraypap);

    }catch(e){
        console.log(e);
        res.sentStatus(500);
    }
   

});

module.exports = router;

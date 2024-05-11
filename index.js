const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("shohidul")
});


app.listen("5000", () => {
    console.log(`Backend is running.. at http://localhost:5000`);
});
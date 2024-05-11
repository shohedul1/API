const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("shohidul")
});


app.listen("https://api-iota-indol-26.vercel.app/", () => {
    console.log(`Backend is running.. at http://localhost:5000`);
});

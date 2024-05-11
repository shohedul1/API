const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("shohidul")
});


app.listen('https://api-o2zzsk6w7-shohedul1s-projects.vercel.app', () => {
    console.log(`Backend is running..`);
});

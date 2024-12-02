const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("Marcel Mikucewicz")
})

app.get("/test/:imie/:nazwisko", (req, res)=>{
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    res.send(`${imie} ${nazwisko}`)
})

app.listen(3000, ()=>{
    console.log("ok");
})

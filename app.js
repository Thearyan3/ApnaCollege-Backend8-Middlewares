const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Hi, i am 1st middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, i am 2nd middleware");
//     next();
// });

//logger - morgan(One of the famous and necessary middleware that every developer should know)
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method ,req.hostname, req.path, req.time);
    next();
});

app.get("/", (req, res) => {
    res.send("Root is working");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});
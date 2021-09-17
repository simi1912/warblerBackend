const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use( function(req, res, next){
    let err = new Error("Not Found");
    err.state = 404;
    next(err);
});

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
})
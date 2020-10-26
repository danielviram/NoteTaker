// Dependencies
const express = require ("express");
const fs = require("fs");

// Set Up EXPRESS
const app = express();
const PORT = process.env.PORT || 8080;

// SET UP EXPRESS APP TO HANDLE DATA PARSING

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assest", express.static("./assest"));

require("./routing/html-routes")(app);
require("./routing/api-routes")(app);


// STARTS THE SERVER TO BEGIN LISTENING 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
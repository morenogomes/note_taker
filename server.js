var express = require("express");
var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes");

//Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 3000;
//add html and Api routes onces created

///Set up body paring state and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//app.use with routes here;
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


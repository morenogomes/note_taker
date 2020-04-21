var express = require("express");
var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes");


var app = express();
var PORT = 3000;
//add html and Api routes onces created

///setting up body paring state and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//app.use with routes here
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


  
  // Starts the server to begin listening
  // =============================================================
  //app.listen(PORT, function() {
   // console.log("App listening on PORT " + PORT);
  ///});
  
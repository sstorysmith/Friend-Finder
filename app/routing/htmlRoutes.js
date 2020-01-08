
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path")


module.exports = function (app) {

  // Routes
  // =============================================================
  // Basic route that sends the user to the survey page
  console.log("in htmlRoutes");

<<<<<<< HEAD
app.get("/allFriends", function(req, res) {
  console.log('inside api Routes ALLfriends');   
  // calculate and display all friends matches  
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../public/allFriends.html"));
});

// everything else route here to home page
=======
  // Route sends the survey to the user.
  app.get("/survey", function (req, res) {
    console.log("sending suvery");
    res.sendFile(path.join(__dirname, "../public/survey.html"))
    
  });

  // everything else route here to home page
>>>>>>> aad4e80c97229fc2fe27e5ec144b7f7564270344

  app.get("*", function (req, res) {
    console.log("request or catchall =", req);
    console.log(path.join(__dirname, "../public/home.html"));
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });




}




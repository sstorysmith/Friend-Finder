
// ===============================================================================
// LOAD DATA
// We are linking our routes to our data source. 
// This data source holds array of information on each survey participant.
// ===============================================================================
<<<<<<< HEAD
var friendsData = require("../public/assets/js/friendsData.js");
var determineCompatibles = require("../public/assets/js/determineCompatibles.js");

=======
var friendsData = require("../data/friendsData.js");
const determineCompatibles = require("../public/determineCompatibles");
>>>>>>> aad4e80c97229fc2fe27e5ec144b7f7564270344

// ===============================================================================
// ROUTING
// These route the user's request to the page they will visit/see.
// ===============================================================================

<<<<<<< HEAD
 console.log("API Router has started"); 
 module.exports = function(app) {

// API GET Requests
// Below code handles when the user's path takes them to "visit" a page. 
// res[onds with the friends data file  
// ---------------------------------------------------------------------------
 app.get("/api/friends", function(req, res) {
   console.log('inside api Routes app.get  api friends');
  // const friendsData = require("../data/friendsData.js");
   res.json(friendsData);         });      
                                              

// Below code handles when the user's path takes them to the survery page.
// When the user clicks the submit button, the form data is sent   
// -----------------------------------------------------------------------

     app.post("/api/survey", function(req, res) {
   console.log('inside api Routes app.post  survey friendsData' + friendsData);   
   // store user and survey results to the datafile 
      console.log(req.body);
      friendsData.push(req.body);                                     
         
     // take the new user/survey and find a compatible user
      
       var bestMatch = determineCompatibles(friendsData[friendsData.length -1].scores, friendsData);
       console.log(bestMatch +  "     line 42");
       res.json(bestMatch);
                                                 })
                                              

// Below code handles when the user's path takes them to the display all Friend Matches.
// When the user clicks the submit button, the form data is sent   
// -----------------------------------------------------------------------
  app.get("/api/allFriends", function(req, res) {
  console.log('inside api Routes app.post  ALLfriends line 51');   
  // calculate and display all friends matches  
  console.log(req.body);
  res.json(friendsData);
});
=======
console.log("API Router has started");
module.exports = function (app) {

  // API GET Requests
  // Below code handles when the user's path takes them to "visit" a page. 
  // res[onds with the friends data file  
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function (req, res) {
    console.log('inside api Routes app.post  api friends');
    const friendsData = require("../data/friendsData.js");
    res.json(friendsData);
  });


  // Below code handles when the user's path takes them to the survery page.
  // When the user clicks the submit button, the form data is sent   
  // -----------------------------------------------------------------------

  app.post("/api/survey", function (req, res) {
    console.log('inside api Routes app.post  survey friendsData');
    // store user and survey results to the datafile 
    console.log(req.body)
    friendsData.push(req.body);

    // take the new user/survey and find a compatible user
    //  res.json(friendsData[3])

    //res.json(determineCompatibles);

    console.log(" about to detemrine bestMatch");
    var bestMatch = determineCompatibles(friendsData[friendsData.length - 1].scores, friendsData)
    console.log(bestMatch)
    res.json(bestMatch);
  })
>>>>>>> aad4e80c97229fc2fe27e5ec144b7f7564270344
}
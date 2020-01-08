# Friend Finder - Node and Express Servers
This is a compatibility-based "FriendFinder" application -- basically a dating app. The full-stack site will take in results from a user's survey, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
​
### Overview
Steps for academic Class:
  $npm - i   // this creates the package.json file with dependencies named
  $npm install express 
  $node install path 
node Express is used to handle routing.

The flow of this application:
SERVER side    CLIENT side
  1. start the SERVER listening on port 3000 with routes
                2. connect to the port from the CLIENT 
                3. display home.html
                4. click on display Friends Button
                5. "/friends" path is sent SERVER
  6."app.get /friends" executes href file to display the raw data of /data/friends.js source
                7. click on Survey Button
                8. "/survey" path is sent to the SERVER
  9. "app.post "/survey" sends the survey.html file to client
                10 survey.html is displayed and user enters answers 
                11."app.post /survey" path is sent when user clicks the submit button
  12 "app.post /survey" calls the determineCompatibility module
  13 send display modal with the matching user ids and photos
​
### Working Demo
​
### File Directory
FriendFinder
  - .gitignore
  - app
    - data
      -images
      - friends.js
    - public
      -css
          -reset.css
          -style.css
      -allFriends.html
      -determineCompatibles.js
      -displayAllFriendssql.html
      - home.html
      - survey.html
    - routing
      - apiRoutes.js
      - htmlRoutes.js
  - node_modules
  - package.json
  - server.js

### Submission on BCS
​
* Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!
​

​
### Reminder: Submission on BCS
​
* Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!
​
- - -
​
### Minimum Requirements
​
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below. **This assignment must be deployed.**
​
- - -
​

​
Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.
​
See the [Supplemental Heroku Deployment Guide](../../03-Supplemental/HerokuGuide.md) for in-detail deployment instructions.
​

​
### Add To Your Portfolio
​
After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
​







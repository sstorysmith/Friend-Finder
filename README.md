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
SERVER side is blue   CLIENT side is green


<ol type="1">
  <li style="color:blue">Start the SERVER listening on port 3000 with routes</li>
             <ol>
                <li style="color: green">connect to the port from the CLIENT 
                <li style="color: green">display home.html
                <li style="color: green">click on display Friends Button
                <li style="color: green">"/friends" path is sent SERVER
              </ol>
  <li style="color:blue">app.get /friends" executes href file to display the raw data of /data/friends.js source</li>
              <ol>
                <li "style="color: green">click on Survey Button
                <li style="color: green">"/survey" path is sent to the SERVER
               </ol>
  <li style="color:blue">"app.post "/survey" sends the survey.html file to client</li>
                <ol>
                <li style="color: green">survey.html is displayed and user enters answers 
                <li style="color: green">"app.post /survey" path is sent when user clicks the submit button</li>
                </ol>
  <li style="color:blue">"app.post /survey" calls the determineCompatibility module</li>
  <li style="color:blue">send display modal with the matching user ids and photos</li>
  </ol>
​
https://mighty-castle-12131.herokuapp.com/
​
### File Directory
FriendFinder
  - .gitignore
 public/assets
  -images
      - friends.js
   - app
    - data
      -images
      - friends.js
    - js
        -images
             .jpg
        -af.js
        -determineCompatibles
        - friendsData.js
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





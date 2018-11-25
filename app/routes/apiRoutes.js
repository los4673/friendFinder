/** Loads Data
 * This will link are data from the friends.js file
 */
var possibleFriends = require("../data/friends.js");
// Routing

module.exports = function(app) {
    
    /** Friends GET route
     * Will display all possible friends
     */

     app.get("/api/friends", function(req, res) {
         console.log("API Route called");
         res.json(possibleFriends);
     });

     /** Friends POST Route
      * This will allow us to store possible friends into our 'database'
      */

      app.post("/api/friends", function(req, res) {
          possibleFriends.push(req.body);
          console.log("Postman received by api, data output => " + JSON.stringify(req.body, null, 2));
          res.json(possibleFriends);
      })
}
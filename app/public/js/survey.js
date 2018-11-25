console.log("Survey JS file connected!!");

$(".dropdown-trigger").dropdown();
// Survey Button is Clicked
$("#survey").click(function(e) {
  //Prevent the button from reloading the page
  e.preventDefault();
  // Best match variable that will be dyanmically updated as we loop through the friends in the 'database'. This will then be used to display the match.
  var bestMatch = {
    name: "",
    url: "",
    scores: []
  };
  // New Friend objected created from the form fills in survey. 
  var newFriend = {
    name: $("#name")
      .val()
      .trim(),
    url: $("#url")
      .val()
      .trim(),
    scores: [
      +$("#question1")
        .val()
        .trim(),
      +$("#question2")
        .val()
        .trim(),
      +$("#question3")
        .val()
        .trim(),
      +$("#question4")
        .val()
        .trim(),
      +$("#question5")
        .val()
        .trim(),
      +$("#question6")
        .val()
        .trim(),
      +$("#question7")
        .val()
        .trim(),
      +$("#question8")
        .val()
        .trim(),
      +$("#question9")
        .val()
        .trim(),
      +$("#question10")
        .val()
        .trim()
    ]
  };



  console.log(newFriend);
  console.log("Survey button clicked!!");
  // AJAX call that retrieves friends from the database.
  $.ajax({ url: "/api/friends", method: "GET" }).then(function(possibleFriends) {
    // Variable that will keep track of the current best match
    var currentBestScore = 0;
    // Loops through users retrieved from "database"
    console.log("current possible friends" + JSON.stringify(possibleFriends));
    for (var i = 0; i < possibleFriends.length; i++) {
      console.log("iteration: " + i + JSON.stringify(possibleFriends))
        console.log("_______________________________________________________")

    //Stores current friend and their scores
      var currentFriend = possibleFriends[i];
      console.log("Current name " + currentFriend.name)
      var currentFriendsScore = currentFriend.scores;
      // currentScore variable used for tracking
      var currentScore = 0;
      // Loops through currentFriend scores,compares numbers to new friend, updates the current score, 
      for (var j = 0; j < currentFriendsScore.length; j++) {
        currentScore += Math.abs(currentFriendsScore[j] - newFriend.scores[j]);
      }
      console.log("The current Score after the loop: " + currentScore);

      // Checks if current friend is the best match. If true best match will update with correct information
      if (currentScore < currentBestScore || currentBestScore === 0) {
          bestMatch.name = currentFriend.name;
          bestMatch.url = currentFriend.url;
          bestMatch.scores = currentFriend.scores;
          currentBestScore = currentScore;
          currentScore = 0;
      } else {
          currentScore = 0;
      }
      console.log("The current Score after the if statement: " + currentScore);

    }

    console.log("current best match");
    console.log("best match is" + JSON.stringify(bestMatch))
    findBestMatch(possibleFriends);
  }).done(function() {
    $.post("/api/friends", newFriend, function (data) {
      console.log("New friend sent to database!");
      alert("best match" + JSON.stringify(bestMatch));

  });
  });
});

//Gets 
function findBestMatch(possibleFriends) {
  for(var i = 0; i < possibleFriends.length; i++) {
    console.log("findBestMatch loop" + possibleFriends[i])
  }

console.log("hello")
  

}

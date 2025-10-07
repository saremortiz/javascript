alert("Welcome!");

var quizQue = [" the largest planet in our solar system? ", " the process by which plants make food from sunlight? ", "the largest part of the human brain? "];
var answers = ["jupiter", "photosynthesis", "cerebrum"];


function triviaQuiz() {
	
  var points = 0;
  //use a for loop to loop through each math question
  for (i = 0; i <= 2; i++) {
    //set attempts to 3
    var attempts = 2;
    // use a while loop to give the user 3 attempts to answer
    while (attempts > 0) {
      // prompt user with math question
      ans = prompt("What is " + quizQue[i]);
      // see if the answer matches the answer array
      if (ans == answers[i]) {
        // if correct, add 1 to points, alert user and set attempts to 0
        points = points + attempts + 1;
        alert("Correct!");
        attempts = 0;
      } else {
        // if answer doesn't match, alert user and subtract 1 from attempts
        alert("Incorrect");
        attempts = attempts - 1;
      } 
    } 
  } 
  // return the points variable
  return points;
}
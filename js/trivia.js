alert("Welcome!");


/* User email */

 

function validEmail(email) {
    var emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    var valid = email.match(emailRegex);
    return valid;
}
function toGetEmail() {
	let email = prompt("Please enter an Email: ");
	while (!validEmail(email)) {
		alert("Invalid email please enter a valid email");
		email = prompt("Please enter an Email: ");
	}

	let username = email.split('@')[0].toUpperCase();
	let domain = email.split('@')[1];
 	
                        document.write("<p> Username: " + username + "</p>");
						document.write("<p> Domain: " + domain + "</p>");
}
/*Date and time */

// create a date object 
var date = new Date();

// return the hour of the day in 24 hour format 

var timemin = date.toLocaleString();

//  return the numeric index of the month beginning 0 = January 
var numberday = date.getDate();

// create an array of month names and array of day names 
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]

/* Function for greetings and uppercase name */

function timegre() {
	const time = new Date().getHours();
	let greeting;
	
	switch (true) {
case (time >= 7):
	greeting = "Good Evening!";
	break;
case (time >= 12):
	greeting = "Good Afternoon!";
	break;
case (time >= 0):
	greeting = "Good Morning!";
	break;
default:
	greeting = "Greetings";
}
console.log("greeting", greeting);
return greeting;

}

function capfirLet(str) {
	console.log("input string: ", str);
	const result = str[0].toUpperCase() + str.substring(1).toLowerCase();
	console.log("formatted string: ", result);
	return result;
}

const userName = prompt("Enter your name " );
console.log("User name", userName);


const formatname = capfirLet(userName);

const greeting = timegre();

document.write("<p>" + greeting + " " + formatname + "</p>");

/*Qoute of the day */
function quote() {
var qoutesOfDay = ["Don't follow your dreams, just ask where they are.", "A day without sunshine is like, you know, night.", "Never put off till tomorrow what you can do the day after tomorrow", "Everyday might not be good, but at least each one comes with snacks somewhere", "And dont forget that, mondays are proof that calendars have a dark sense of humor"];

var indexNumber = Math.floor(Math.random()*4)+0;

document.write("<h2 id ='content'>" + qoutesOfDay[indexNumber] + "</h2>");
}
/*trivia code*/	

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
      if (ans.toLowerCase() == answers[i]) {
        // if correct, add 1 to points, alert user and set attempts to 0
        points = points + attempts + 1;
        alert("Correct!");
        attempts = 0;
      }
	  else {
        // if answer doesn't match, alert user and subtract 1 from attempts
        alert("Incorrect, you have " + attempts + " attempts");
        attempts = attempts - 1;
      } 
    } 
  } 
  // return the points variable
  return points;
}
/*Checking trivia answers*/

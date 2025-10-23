// <script src="js/trivia.js"></script>


/* Adding a play game button to start the game. 
Without messing up the html and loading it dynamically, only using js 
First step is to create a variable that will get the id element like this:*/

var promptDiv = document.getElementById('prompt');

//to load it dinamically:

promptDiv.innerHTML = '<button id="playButton" onclick="playGame()"> Play Game </button>';

//game play function 
var questions = [
   ["what is the largest planet in our solar system? ?", 0, "jupiter", "saturn", "neptune"],
   ["what is the process by which plants make food from sunlight? ", 1, "Fermentation", "photosynthesis", "chemosynthesis"],
   ["what is the largest part of the human brain? ", 2, "cerebellum", "brainstem", "cerebrum"]
];

var counter = 0
var questionDiv = document.getElementById('question');
var answerDiv = document.getElementById('answer');
var promptDiv = document.getElementById('prompt'); 

function playGame() {
	counter = 0
	
	if (counter < 1) {
	
	
		var questionNumber = questions.shift();

		questionDiv.innerHTML = questionNumber[0];
		questions.shift();
		
		var correctanswer = questionNumber[1];
		console.log(correctanswer);
		questionNumber.shift();
		
		var answerlink = '';
		for ( var i = 0; i < questionNumber.lenght; i++) {
			answerlink += '<li><a href="#" onclick="checkAnswer(' + i + ', ' + correctanswer + ')">' + questionNumber[i] + '</a></li>';
		
		answerDiv.innerHTML = '<ul>' + answerlink + '</ul>';
		promptDiv.innerHTML = '<p> Click the best answer </p>';
		counter += 1;
		
		}
}
}

function checkAnswer(answerlink, correctanswer) {


  if (answerlink === correctanswer) {
    promptDiv.innerHTML = '<p> Correct answer!</p>';
  } else {
	promptDiv.innerHTML = '<p> Incorrect answer. The correct answer was' + (correctanaswer + 1) + '</p>';

  }

  if (questions.length === 0) {
    promptDiv.innerHTML = '<button onclick="location.reload()">Restart Game</button>';
  } else {
    promptDiv.innerHTML = '<button onclick="playGsme()">Play game</button>';
  }
}

 
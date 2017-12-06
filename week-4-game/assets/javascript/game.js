$(document).ready(function() {

	crystals = ["images/redcrystal.png","images/bluecrystal.png","images/yellowcrystal.png", "images/greencrystal.png"];

	var score = 0;
	var wins = 0;
	var losses = 0;
	
	
	Crystals();
	Game();

	function Crystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.floor(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $("<img>");
			imageCrystal.attr("data-num", numbers[i]);
			imageCrystal.attr("src", crystals[i]);
			imageCrystal.attr("alt", "crystals");
			imageCrystal.addClass("crystalImage")
			$("#crystals").append(imageCrystal);
		}
	}

	function Game() {

		score = 0;
		$("#yourScore").text(score);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(10,100);

		$(".value").text(numberToGuess);


		$(".crystalImage").on("click", function(){
		    score = score + parseInt($(this).data("num"));
		   
		    $("#yourScore").text(score);

		    if (score == numberToGuess){
		      alert("You won!");
		      wins ++;
		      $("#win").text(wins);
		      Crystals();
		      Game();
		        
		    } else if ( score > numberToGuess){
		        alert("You lost!")
		        losses ++;
		        $("#loss").text(losses);
		        Crystals();
		        Game();
		    }
		});
	}

});
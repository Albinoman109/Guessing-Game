var num = Math.floor(Math.random() * 50);
var easterEgg = 42;
var myAge = 21;
var hitchHiker = "towel";
var questons = ["Please guess a number!", "Please guess my age!", "Is this game awesome? Yes or No"];

//This is all the code for my game. I put it in a function
function startTheGame() {
var guessNum = prompt(questons[0]);
var guessAge = prompt(questons[1]);
var awesome = prompt(questons[2]);


if (guessAge == myAge) {
	alert("Your right! I am 21!");
} else {
	if (guessAge < myAge) {
		alert("Your a little low!");
	}
	else {
		if (guessAge > myAge) {
          alert("Im not that old!!");
		}
	}
}

if (guessNum == num) {
		alert("You win!!");
	}
	else {
		if (guessNum == easterEgg) {
			alert("Thats the answer to the Ultimate Question of Life, the Universe, and Everything!");
		} else {
			if (guessNum == hitchHiker) {
				alert("You can't forget that!!");
			} else {
				if (guessNum < num) {
					alert("Your number was to low!");
				} else {
					if (guessNum > num) {
						alert("Your number was to high!!");
					}
				}
			}
		}
	} 


if (awesome === "yes" || awesome === "Yes") {
    alert("Damn right it is!");

} else if (awesome === "no" || awesome === "No") {
    alert("Awwwwwwwww");

} else {
    alert("Waaay off..");
}

console.log("They thought I was" + " " + guessAge);
console.log("Their guess was" + " " + guessNum);
console.log("Do they think my game is awesome?" + " " + awesome);
document.getElementById('answer1').innerHTML = "You guessed the number" + " " + guessNum;
document.getElementById('answer2').innerHTML = "You thought I was" + " " + guessAge;
document.getElementById('answer3').innerHTML = "Did you think this game was awesome?" + " " + awesome;

};


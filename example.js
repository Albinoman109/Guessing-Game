var myAge = 21;
var dateOfBirth = 1994;
var guessAge = prompt("Please guess my age!")
var guessDoB= prompt("Please guess my date of birth!")

if (guessAge === myAge) {
	alert("Your right!");
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

if (guessDoB === dateOfBirth) {
	alert("That right!");
} else {
	if (guessDoB < dateOfBirth) {
		alert("Hey im not that young!");
	}
	else {
		if (guessDoB > dateOfBirth) {
			alert("Thanks...but im not that old!");
		}
	}
}
console.log("They thought I was" + " " + guessAge);
console.log("They thought I was" + " " + guessDoB);
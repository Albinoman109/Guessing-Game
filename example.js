var num = Math.floor(Math.random() * 50);
var easterEgg = 42;
var myAge = 21;
var hitchHiker = "towel";
var guessNum = prompt("Guess a number");
var guessAge = prompt("Please guess my age!");
var awesome = prompt("Is this game awesome? yes or no");

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

//4.In JS: Create an array of 5 strings. Make sure to capitalize some of the letters in your strings.

var arrayTeams = ["49ers","Warriors","Giants","Barcelona","Manchester City"]

//5.In JS: Loop through the array. Change each string to lowercase, and then add them to a new array.
var newTeams = [] ;
for (var i = 0; i < arrayTeams.length; i++) {
	var other = arrayTeams[i].toLowerCase()
	newTeams.push(other)
}
console.log(newTeams)

//6.In JS: Loop through the new array (all lowercase strings) and log the first and last character of each string to the console.

for (var T = 0; T < newTeams.length; T++) {
	newTeams[i]
	console.log(newTeams[T][0])
	console.log(newTeams[T][newTeams[T].length - 1])
}

//7.In JS: Create a variable and store your name in it. Using the split method and a loop, log each letter of your name to the console.

var name = "Jose" // value of variable is Jose or anything that is in its place and its a "string"
var splitName = name.split('')//declaring a second variable and setting the value equal to name and splitting it into an array of single characters.

for (var N = 0; N < splitName.length; N++) {  // this is a 

console.log(splitName[N])
}

//7. In JS: Using the join method, put your name back together and replace all occurrences of one letter with another. (ie: replace all a's with y's)
splitName = splitName.join(" ");
console.log(splitName.replace(/o/g,"d"))

// #9 Create a function that will get the user input, test it against the standard email regex, and print the result in the console

function validateEmail() {
	var userEmail = document.getElementById("userEmail");
	var regex = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
	console.log(regex.test(userEmail.value))
};
// test the email to see if its value is valid
document.getElementById("testEmail").addEventListener("click",validateEmail);








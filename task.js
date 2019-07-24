//task 1 Given an array of numbers. Create an array containing only unique elements.
/*
//var arr = [4, 1, 2, 5, 7, 2, 3, 6, 5, 3, 1, 9, 7, 4];
// var arr = [4, 4];
var arr = [1, 2, 3, 3, 2, 4];

var newArr = [];
var arrLength = arr.length;
var k = 0;
for (var i = 0; i < arrLength; i++){
	var isNotUnique = true;
	for (var j = 0; j < i; j++){
		if (arr [j] === arr[i]){
			isNotUnique = false;
			break
		}
	}
	if (isNotUnique) {
		newArr[k] = arr[i];
		k++
	}
	
}
console.log(newArr);
*/


// task 2 Given a string and symbols. Change first symbol by the second one in the string.
/*
//var str = 'The results are not recorded yet';
var str = 'does the following code';
var changeFrom = prompt();
var changeTo = prompt();
var length = str.length;
var newStr = '';

for (var i = 0; i < length; i++){
	if (str[i] === changeFrom){
		newStr = newStr + changeTo;
	} else {
		newStr = newStr +str[i];
	}
}
console.log (newStr);
*/


// task 3 Insert a string. Create new string which is the mirror reverse of the inserted one around its center.
/*
var str = prompt();
var length = str.length;
var str1 = '';
var str2 = '';
var half = Math.floor(length/2);

for (var i = 0; i < length; i++){
	if (length%2 !== 0) {
		if ( i < half) {
			str1 = str1 + str[i];
		} else if(( half-i)=== 0){
			str1 = str[i] + str1;
		} else if (i > half){
			str2 = str2 + str[i];
		} 
	} else {
		if ( i < half) {
			str1 = str1 + str[i];
		} else {
			str2 = str2 + str[i];
		} 
	}
}
console.log (str2 + str1);
*/


//task 4 Given a sentence with missing words and an array of words. Replace all ‘_’ in a sentence with the words from the array by the given sequence.
/*
var sentence = 'May the _ _ _ _.';
//var sentence = 'if at _ you don`t _, try, try _.';
//var sentence  = '_, we have a _.';
var length = sentence.length;
var sentArr = '';

for (var i = 0; i < length; i++){
	var arr = []
	if (sentence[i] === '_') {
		arr[0] = [prompt(`${sentence}`,'type the word')];
		sentArr = sentArr + arr[0]; 
	} else {
		sentArr = sentArr +sentence[i];
		
	}
}
console.log(sentArr);
*/


//task 5 Given mixed array of numbers, strings, booleans, nulls and undefineds. Filter array and get all the numbers in a separate array. Arrange them such as from the beginning are the odds and from the ending the evens.
/*
//var arr = [8, 0, 1, 'hey', 12, 5, true,'2', null, 7, 3];
//var arr = [8, 8, 'meh', 6];
var arr = [null, null, 1, undefined, 5, 9, false];
var length = arr.length;
var newArr =[];

for (var i = 0; i < length; i++){
	if (typeof(arr[i]) === 'number'){
		if (arr[i]%2 ===0){
			newArr.push(arr[i]);
		} else {
			newArr.unshift(arr[i]);
		}
	}
}
console.log(newArr);
*/


// task 6 Given an array of strings and numbers. Print the number of integers and the number of strings in the array.
/*
var arr = [1, 4, 'i am a string', '456'];
//var arr = [1, '10', 'hi', 2, 3];
var length = arr.length;
var string = 0;
var number = 0;

for (var i = 0; i < length; i++){
	if (typeof(arr[i]) === 'number'){
		number++
	} else {
		string++
	}
}
console.log(`Numbers: ${number}, Strings: ${string}`);
*/


// task 7 Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of their lengths.
/*
var arr = ['anymore', 'raven', 'me', 'communicate'];
//var arr = ['wish', 'slightly', 'understand', 'longer', 'unexpected', 'heart'];
var length = arr.length;
var big = arr[0].length;
var small = arr[0].length;

for (var i = 0; i < length; i++){
	var currnetIndexLength = arr[i].length;
	big = Math.max(big, currnetIndexLength);
	small =Math.min(small, currnetIndexLength);
}

console.log(big + small);
*/


// task 8 Given an array of numbers and a number. Find the index of a first element which is equal to that number. If there is not such a number, that find the index of the first element which is the closest to it.
/*
//var arr = [21, -9, 15, 2116, -71, 33]; 	//-71
//var arr = [36, -12, 47, -58, 148, -55, -19, 10]; 	//-56
var arr = [5, 46, 17, -2, 89, 0, 26]; 	//3006
var number = prompt(`${arr}`, 'input a number');
var length = arr.length;
var differenceMin = Math.pow(10, number.length);
number = +number
var index;
for (var i = 0; i < length; i++){
	if (arr[i] === number){
		index = i;
		break
	} else {
		var difference = Math.abs(number - arr[i]);
		differenceMin = Math.min(differenceMin, difference);
		if (differenceMin === difference) {
			index = i;
		}
	}
}
console.log (index);
*/


// task 9 Given a sentence as a string. Split it according to space and comma and create an array consisting of the words of the array. The last word should not contain the last . or !
/*

//var str = 'May the force be with you';
var str = 'Keep your firends close, but your enemies closer';
var length = str.length;
var newStr = '';
var arr = [];
var j = 0; // array index
for (var i = 0; i < length; i++){
	newStr = newStr + str[i];
	if ((str[i] === ' ') || (i === length - 1)) {
		arr[j] = newStr;
		newStr = '';
		j++
	}
	
}
console.log(arr);

*/


// task 10 Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a new array where each element from that array is placed under the index of its value. Start from the smallest value and end with the biggest one. If there are missing values, put in its places undefined.
/*

//var arr = [4, 3, 0, 9];
var arr = [26, 30, 19, 5];
var length = arr.length;
var newArr = [];

for (var i = 0; i < length; i++){
	newArr[arr[i]] = arr[i];
}
var newArrLength = newArr.length;
var veryNewArr =[];
var isNumber = false;
for (var j = 0; j < newArrLength; j++){
	if (newArr[j] === undefined && !isNumber) {
		isNumber = false;
	} else {
		isNumber = true;
	}
	if (newArr[j] === undefined && isNumber){
		newArr[j] = 'undefined';
	} else {
		newArr[j] = newArr[j];
	}
	
}
console.log(newArr);
*/


/* task 11 Write a program to check the validity of password input by users.
Validation:
a. At least 1 letter between [a-z] and 1 letter between [A-Z].
b. At least 1 number between [0-9].
c. At least 1 character from [$#@].
d. Minimum length 6 characters.
e. Maximum length 16 characters.
*/
/*

*/
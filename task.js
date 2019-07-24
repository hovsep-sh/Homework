/*1 task Insert a digit and a number. Check whether the digits contains in the number or not.*/

var digit = +prompt('type digit','');
var number = +prompt('type number','');
var result;
 while(number > 0){
      var reminder;
      var digitLength = (digit.toString()).length;
      var divider = 10;
      for (var i = 0; i < digitLength; i++){   
           reminder = number - divider * Math.floor(number/divider); 
           divider = divider * 10;
      }
      if (reminder === digit){
        result = 'yes';
        break
      } else {
          result = 'no';
      }

      number = Math.floor(number/10);
 }
 console.log (result);
 
/* 2 task */

var number = Math.abs(+prompt('type number',''));
var lastDigit = number%10;
var firstDigit = number;

while (firstDigit > 9) {
	firstDigit = Math.floor(firstDigit/10);
}
if  (number < 10 ) {
	alert(number);
} else if (number < 100){
	alert ( (lastDigit * 10) + firstDigit)
} else {
	var numberLength = (number.toString()).length;
	x = Math.pow(10 , ((numberLength) - 1) ) ;
	//753 - 7*100 + 3*100 - 3 + 7 = 357
	//number - firstDigit * x + lastDigit * x - lastDigit + firstDigit 
	//number - x * (firstDigit - lastDigit) + (firstDigit -lastDigit);
	alert (number + ( firstDigit - lastDigit ) * ( 1 - x ) );
}
/* 3 task */
var number = Math.abs(+prompt('type number',''));
var numberLength = (number.toString()).length;

if (number < 10){
	alert('0');
} else {
	var biggestNumber = 0;
	var smallestNumber = 9;
	while (number > 0) {
		var currentNumber = number%10;
		biggestNumber = Math.max (currentNumber, biggestNumber);
		smallestNumber = Math.min(currentNumber, smallestNumber)
		number = Math.floor(number/10);
	}
	console.log(biggestNumber);
	console.log(smallestNumber);
}

/* 4 task*/
var number = Math.abs( +prompt ());

if (number === 1 || (number%2 ===0 && number !== 2) ){
	alert('no');
} else {
	result = 'yes';
	for (var i = 2; i < number/2; i++){// stex karelia i+=2 grel u sksel hashvel i = 3 -ic ete verevum avelacnenq vor number === 2 -i depqum alert ('yes') 
		if (number%i === 0) {
			result ='no';
			break
		}
	}
	alert(result);
}
/*
/*
Armeni tarberak vor 2-e chi hashvum u 'no' u 'yes' a tpum vorosh voch primeri depqum ete number%2 !== 0
var number = Math.abs( +prompt ());

if (number === 1) {
  console.log('No');
} else if (number % 2 === 0) { // if number is even, no need to check further
  console.log('No');
} else {
  for (var i = 3; i < number / 2; i += 2) { 
    // if code reached here, we already know that the number is not even, so we will start
    // from 3, and then increment y 2, so we won't check if number is divisible by 4, 6, 8, etc...
    if (number % i === 0) {
      console.log('No');
      break;
    }
    // the loop will continue until number/2, because larger numbers obviously do not divide number 
  }
  // if we did not find a divisor, then number is prime
  console.log('Yes');
}
*/
*/
/*5 task*/
do {
	var draw = false;
	playerOne = prompt('', 'Player 1 type rock or paper or scissors');
	playerTwo = prompt('', 'Player 2 type rock or paper or scissors');
	
	if (playerTwo === 'rock' || playerTwo === 'paper' || playerTwo === 'scissors') {
		switch(true) {
		  case (playerOne === 'paper' && playerTwo === 'rock'):
			alert ('1nd player wins!'); break;

		  case (playerTwo === 'paper' && playerOne === 'rock'):
			alert ('2nd player wins!'); break;

		  case (playerOne === 'scissors' && playerTwo === 'paper'):
			alert ('1nd player wins!'); break;

		  case (playerTwo === 'scissors' && playerOne === 'paper'):
			alert ('2nd player wins!'); break;

		  case (playerOne === 'rock' && playerTwo === 'scissors'):
			alert ('1nd player wins!'); break;

		  case (playerTwo === 'rock' && playerOne === 'scissors'):
			alert ('2nd player wins!'); break;

		  default:
			alert ('Draw! Enter new values')
			draw = ( (playerOne === 'paper' && playerTwo === 'paper') || (playerOne === 'rock' && playerTwo === 'rock') || (playerOne === 'scissors' && playerTwo === 'scissors') )
			
		break;
		}
	}
	else {
		alert ('Invalid input, enter correct value.');
		draw = true;
	}
} while (draw);
/* 6 task*/
var number = Math.abs (+prompt('Fibonacci number', 'type any number'));
var x =0;
var y = 0;
var z = 1;
var i = 0;

while (i < number) {
	y = z;
	z = x;
	x = y + z;
	i++	
}

alert (x);
/*7 task*/

var number = Math.abs (+prompt('Fibonacci number', 'type any number'));
var x = 0;
var y = 0;
var z = 1;
var output = '';

while (x < number) {
	output = output + x.toString() + ', ';
	y = z;
	z = x;	
	x = y + z;
}
alert (output);
/* 8 task*/
var number = Math.abs(+prompt ('' , 'Type the index' ));

var n = 1;
var sum = 0;

while (n <= number) {
	var currentIndex = Math.pow(-1 , (n -1) ) * ( 1 /  (1 + 2* (n -1) ) );
	sum = sum + currentIndex;
	n++
}
alert (sum);

/*
// Armeni tarberak
var n = 9;
var sign = 1;
var result = 0;
for (var i = 1; i <= n; i++) {
	if (i % 2 !== 0) {
		//console.log(`${sign < 1 ? '-' : '+'}1/${i}`); // you can log each number to see it adds the correct ones
		result += (sign * (1 / i));
		sign = sign < 0 ? 1 : -1;
		 
	}
}
console.log(result);
*/
/* 9 task*/
var output = '';
for (var i = 0 ; i < 100; i++) {
	
	if (i < 10){
	output = output+ '\'' + '0' + i + '\'' +', ';	
	} else  {
	output = output+ '\'' + i + '\'' +', ';	
	}
}
alert (output);
/*

*/
// task 10

var number = Math.abs( +prompt ('', 'type a intiger number to check if prime') );

var sum = 0;
var product = 1;
var x = number;

while (x > 0) {
	var reminder = x%10;
	sum =  sum + reminder;
	product = product * reminder;
	x = Math.floor( x / 10 );
}

if (number === 0) {
	alert('Cannot calculate.');
} else if (product%sum === 0) {
	alert ( 'Quotient is ' + product / sum);
} else {
	alert ( 'Remainder is ' + product % sum);
}

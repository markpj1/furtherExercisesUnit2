function isInteger(n) {
	return n !== " " && !isNaN(n) && Math.round(n) == n;
}

console.log(isInteger(17));

function isInt (x) {
	if(x !== '' && !isNaN(x)) {
		return true;
	} else {
		return false;
	}

}
console.log(isInt("ten"));

// Best.
var isInt = function(x) {return x === (x | 0);};
console.log(isInt("1"));

//Split string.

function splitStrToLowerCase (str) {
	var low = str.toLowerCase().split(" ");
	console.log(low);
}
 splitStrToLowerCase("This Is Split By Six Spaces");
 var myArray = [0,1,2,3];

function sumArray(num) {
	var total = 0
	for(var i = 0; i < num.length; i++) {    
   		total += num[i];
    }
    return total;
};
console.log(sumArray(myArray));

function palindrome(str) {
	return str.split('').reverse().join('') === str;
};
console.log(palindrome("avid diva"))

//addNumbers while i gently loops;
function sumNumWhile(str) {
	var count = 0, total = 0;
	while(count < str.length) {
		total += count;
		count++;
	}
	return total;
};
console.log(sumNumWhile(myArray));


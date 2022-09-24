const maskCreditCard = function(number) {
	const str = number + '';
	const last = str.slice(-4);
	return last.padStart(str.length, '*');
}

console.log(maskCreditCard(746363767367));
console.log(maskCreditCard(8917354894083));
console.log(maskCreditCard(9863454));


// JavaScript Document
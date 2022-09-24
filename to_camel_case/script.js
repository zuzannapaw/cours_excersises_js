

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text =document.querySelector('textarea');

text.style.width = "450px";
text.style.height = "400px";

const button = document.querySelector("button");
button.style.width = "100px"
button.style.height = "70px"


//FIRST BASIC implementation_______________________


//const convert = function(){
//	const textValue = text.value;
////	console.log(textValue);
//	
//	let lowerValue = textValue.toLowerCase();
//
//	const [one,two] = lowerValue.split('_');
////	console.log(one,two);
//
//	const oneAndTwo = one + two.charAt(0).toUpperCase() + two.slice(1);
//
////	console.log(oneAndTwo)
//	text.value = '';
//	text.value = oneAndTwo;
//};
//
//
//
//
//document.querySelector('button').addEventListener("click",convert);

//__________________________________



//SECOND IMPLEMENTATION

//const convert = function(){
//	const textValue = text.value;
////	console.log(textValue);
//	const lowerValue = textValue.toLowerCase();
//
//	const splitedValues = lowerValue.split('\n')
//	
//	
//	for(const [i,value] of splitedValues.entries()){
//		const [first,second] = value.trim().split('_'); 
//		const convertedValue = first + second.replace(second[0],second[0].toUpperCase());
//		const convertedValuePad = convertedValue.padEnd(20) + "*".repeat( i + 1 );
//		console.log(convertedValuePad);
//	}
//};
//
//
//
//
//document.querySelector('button').addEventListener("click",convert);


//___________________________________


//FRESH_____________________


const convert = function(){
	const textValue = text.value.toLowerCase();
	text.value = '';
	const splitTextValues = textValue.split('\n');
	
//	console.log(splitTextValues);
		let message = ''								   
	for (const [i,value] of splitTextValues.entries()){	
//		console.log(i,value);
		const [one,two] = value.trim().split('_');
		const output = one + two.replace(two[0],two[0].toUpperCase());
		const padOuput = output.padEnd(20) + '*'.repeat(i+1);
		console.log(padOuput)
		message+= padOuput +'\n'
		
	}
	
	text.value = message;							   
										   
}

document.querySelector('button').addEventListener("click",convert);



//______________________________




//WITH REPLACE____________________

//const splitedloverValue = lowerValue.split('_');
//const joinedLowerValue = splitedloverValue
//
//const indexDown = lowerValue.indexOf('_');
//
////console.log(indexDown);
//
////const deletedValue = lowerValue.slice(5);
//
//const deletedValue = lowerValue.slice(indexDown,indexDown+1);
//
//
//console.log(deletedValue);
//
//const camelCase = lowerValue.replace(lowerValue[indexDown],lowerValue[indexDown + 1].toUpperCase());
//
////console.log(camelCase);

//___________________________



//for (const value of splitLowerValue){
//	value.trim();
//	trimValues.push(value);
//	
//}
//	
//	console.log(trimValues);
//	






//GOOD_______________________________________
//	const splitLowerValue = lowerValue.split('\n');
//	
//	console.log(splitLowerValue);
//	 
//	
//	for(const [i,value] of 	splitLowerValue.entries()){
//		const [first,second] = value.trim().split('_');
//		
////		console.log(first,second);
//		const output = first + second.replace(second[0],second[0].toUpperCase());
////		console.log(output)
//		
//		const paddOutPut = output.padEnd(20) + '*'.repeat(i + 1);
//										  
//		console.log(paddOutPut)	
	

//}

//______________________________________________



// JavaScript Document
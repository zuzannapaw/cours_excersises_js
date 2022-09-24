// JavaScript Document

const question = new Map([
	['question', 'What is the best programming language?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'JavaScript'],
	['correct', 3],
	[true, 'Correct!'],
	[false, 'Try again!'],
]);



const answer = Number(prompt('Your answer'));

	console.log(question.get(answer === question.get('correct')));


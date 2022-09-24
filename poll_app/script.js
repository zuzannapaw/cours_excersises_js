const btn = document.querySelector(".poll");

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]
  answers: new Array(4).fill(0),

	
	registerNewAnswer(){
		const answer = Number(
			prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
		
		typeof answer === 'number' && answer <this.answers.length && this.answers[answer]++
		
		this.displayResults();
		this.displayResults('string')
	},
	
	displayResults(type = 'array'){
		if(type ==='array'){
			console.log(this.answers)
		}else if(type === 'string'){
			console.log(`Poll results are ${this.answers.join(', ')}`)
		}
	}

};
 
 btn.addEventListener("click",poll.registerNewAnswer.bind(poll));


poll.displayResults.call({answers: [5,2,3]},'string')
poll.displayResults.call({answers: [1,6,8,9,4,5]},'string')

	 // JavaScript Document
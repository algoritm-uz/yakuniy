import myJson from './questions.json' assert { type: 'json' };

const input = document.querySelector('#question');
const answer = document.querySelector('#matching');

myJson.forEach((question) => {
	answer.innerHTML += `  <div class='answer'>
                <p class='answer-question'>${question.number} ${question.question}</p>
                <li> <strong> Javob:</strong> ${question.answer}</li>
            </div>`;
});

input.addEventListener('keyup', (e) => {
	const inputValue = e.target.value;
	console.log();
	const result = myJson.filter((question) =>
		question.question.toLowerCase().includes(inputValue.toLowerCase())
	);
	answer.innerHTML = '';

	result.forEach((question) => {
		answer.innerHTML += `
            <div class='answer'>
                <p class='answer-question'>${question.number} ${question.question}</p>
                <li> <strong> Javob:</strong> ${question.answer}</li>
            </div>`;
	});
});

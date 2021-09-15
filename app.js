const correctAnswers = [
	'B',
	'B',
	'A',
	'A',
	'B',
	'B',
	'B',
	'B',
	'B',
	'B',
	'A',
	'A',
];

const form = document.querySelector('.form');
const result = document.querySelector('.result');

// check answers function
function checkAnswers(e) {
	e.preventDefault();

	let score = 0;

	const UserAnswers = [
		form.q1.value,
		form.q2.value,
		form.q3.value,
		form.q4.value,
		form.q5.value,
		form.q6.value,
		form.q7.value,
		form.q8.value,
		form.q9.value,
		form.q10.value,
		form.q11.value,
		form.q12.value,
	];

	UserAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 8.3333;
		}
	});

	scrollTo(0, 0);

	result.classList.remove('d-none');

	result.querySelector('span').textContent = Math.ceil(score);
}

// adding event listener to form
form.addEventListener('submit', checkAnswers);

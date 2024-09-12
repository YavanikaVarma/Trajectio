document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value
    };

    let careerPath = '';

    if (answers.question1 === 'Science' && answers.question2 === 'Laboratory' && answers.question3 === 'Technical skills') {
        careerPath = 'Engineering or Forensic Science';
    } else if (answers.question1 === 'Art' && answers.question2 === 'Studio' && answers.question3 === 'Creativity') {
        careerPath = 'Design or Architecture';
    } else if (answers.question1 === 'Literature' && answers.question2 === 'Office' && answers.question3 === 'Communication') {
        careerPath = 'Management or Business';
    } else if (answers.question1 === 'Science' && answers.question2 === 'Outdoor' && answers.question3 === 'Problem-solving') {
        careerPath = 'Agriculture or Environmental Science';
    } else if (answers.question1 === 'Science' && answers.question2 === 'Office' && answers.question3 === 'Helping others') {
        careerPath = 'Nursing or Physiotherapy';
    } else {
        careerPath = 'A diverse range of fields based on your interests and skills. Consider exploring multiple options!';
    }

    document.getElementById('results').innerHTML = `<h3>Recommended Career Path:</h3><p>${careerPath}</p>`;
});

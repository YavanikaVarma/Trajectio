function showStreamSelection() {
    document.getElementById('stream-selection').classList.remove('hidden');
}

document.getElementById('mentor-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const results = document.getElementById('mentor-results');
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const careerInterest = formData.get('career-interest');

    let resultText = '<h3>Thank you for your submission!</h3>';
    resultText += `<p>Name: ${name}</p>`;
    resultText += `<p>Email: ${email}</p>`;
    resultText += `<p>Career Interest: ${careerInterest}</p>`;
    resultText += '<p>We will connect you with a mentor soon.</p>';

    results.innerHTML = resultText;
});


function showCourseSelection() {
    const stream = document.getElementById('stream-dropdown').value;
    const courseDropdown = document.getElementById('course-dropdown');
    
    let courses = [];
    switch (stream) {
        case 'science':
            courses = [
                'Engineering: A course focusing on various branches of engineering like Mechanical, Electrical, Civil, and Computer Science.',
                'Medicine: Training to become a medical professional, including MBBS, BDS, and other medical courses.',
                'Pure Science: In-depth study of fundamental sciences like Physics, Chemistry, and Mathematics.'
            ];
            break;
        case 'commerce':
            courses = [
                'B.Com: Bachelor of Commerce, focusing on accounting, business laws, and financial management.',
                'BBA: Bachelor of Business Administration, covering management principles and business operations.',
                'Chartered Accountancy: A professional qualification in accounting and auditing.'
            ];
            break;
        case 'arts':
            courses = [
                'BA in History: A course focused on historical events, research methods, and historiography.',
                'BA in Political Science: Study of political systems, theory, and international relations.',
                'BA in Fine Arts: Includes visual arts, performing arts, and theoretical aspects of art.'
            ];
            break;
    }
    
    courseDropdown.innerHTML = '<option value="" disabled selected>Select a course</option>';
    courses.forEach(course => {
        courseDropdown.innerHTML += `<option value="${course.toLowerCase().replace(/ /g, '-')}">${course}</option>`;
    });
    
    document.getElementById('stream-selection').classList.add('hidden');
    document.getElementById('course-selection').classList.remove('hidden');
}

function showCareerOptions() {
    const course = document.getElementById('course-dropdown').value;
    const careerDropdown = document.getElementById('career-dropdown');
    
    let careers = [];
    switch (course) {
        case 'engineering':
            careers = [
                'Software Engineer: Develops and maintains software applications and systems.',
                'Civil Engineer: Designs and oversees construction of infrastructure projects.',
                'Mechanical Engineer: Works with mechanical systems, including machinery and engines.'
            ];
            break;
        case 'medicine':
            careers = [
                'Doctor: Provides medical care, diagnoses, and treatment to patients.',
                'Nurse: Supports doctors and provides care to patients in various healthcare settings.',
                'Pharmacist: Dispenses medications and provides advice on their proper use.'
            ];
            break;
        case 'pure-science':
            careers = [
                'Research Scientist: Conducts experiments and research in various scientific fields.',
                'Lab Technician: Assists in laboratory experiments and maintains lab equipment.',
                'Science Teacher: Educates students in various scientific subjects.'
            ];
            break;
        case 'b-com':
            careers = [
                'Accountant: Manages financial records and prepares financial statements.',
                'Financial Analyst: Analyzes financial data to help businesses make decisions.',
                'Tax Consultant: Provides advice on tax planning and compliance.'
            ];
            break;
        case 'bba':
            careers = [
                'Business Manager: Oversees business operations and manages teams.',
                'Marketing Executive: Develops and implements marketing strategies.',
                'HR Manager: Manages human resources and employee relations.'
            ];
            break;
        case 'chartered-accountancy':
            careers = [
                'Chartered Accountant: Provides financial advice and auditing services.',
                'Auditor: Examines financial records to ensure accuracy and compliance.',
                'Financial Consultant: Offers financial planning and investment advice.'
            ];
            break;
        case 'ba-in-history':
            careers = [
                'Historian: Researches and interprets historical events and trends.',
                'Museum Curator: Manages collections and exhibits in museums and galleries.',
                'Archivist: Maintains and organizes historical records and documents.'
            ];
            break;
        case 'ba-in-political-science':
            careers = [
                'Political Analyst: Analyzes political trends and provides insights.',
                'Diplomat: Represents the country in international relations.',
                'Public Administrator: Manages public sector organizations and policies.'
            ];
            break;
        case 'ba-in-fine-arts':
            careers = [
                'Artist: Creates visual art pieces for exhibitions and sales.',
                'Art Teacher: Educates students in various forms of art.',
                'Graphic Designer: Designs visual content for digital and print media.'
            ];
            break;
    }
    
    careerDropdown.innerHTML = '<option value="" disabled selected>Select a career path</option>';
    careers.forEach(career => {
        careerDropdown.innerHTML += `<option value="${career.toLowerCase().replace(/ /g, '-')}">${career}</option>`;
    });
    
    document.getElementById('course-selection').classList.add('hidden');
    document.getElementById('career-options').classList.remove('hidden');
}

function showGoal() {
    document.getElementById('career-options').classList.add('hidden');
    document.getElementById('goal').classList.remove('hidden');
}

function savePath() {
    alert('Path saved!');
    // Implement saving functionality
}

function editPath() {
    window.location.reload();
}

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const results = document.getElementById('results');
    const formData = new FormData(event.target);
    const answers = {
        question1: formData.get('question1'),
        question2: formData.get('question2'),
        question3: formData.get('question3')
    };

    let resultText = '<h3>Your Quiz Results:</h3>';
    resultText += `<p>Question 1: ${answers.question1}</p>`;
    resultText += `<p>Question 2: ${answers.question2}</p>`;
    resultText += `<p>Question 3: ${answers.question3}</p>`;

    results.innerHTML = resultText;
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('#navbar-menu');

    navbarToggle.addEventListener('click', function() {
        const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        navbarToggle.setAttribute('aria-expanded', !isExpanded);
        navbarMenu.classList.toggle('show');
    });
});


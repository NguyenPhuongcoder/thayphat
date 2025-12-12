let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let selectedAnswer = null;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const feedback = document.getElementById('feedback');
const currentQuestionSpan = document.getElementById('current-question');
const questionNumSpan = document.getElementById('question-num');
const scoreSpan = document.getElementById('score');
const correctSpan = document.getElementById('correct');
const totalQuestionsSpan = document.getElementById('total-questions');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const finalScoreSpan = document.getElementById('final-score');
const percentageSpan = document.getElementById('percentage');
const restartBtn = document.getElementById('restart-btn');

// Khởi tạo
totalQuestionsSpan.textContent = questions.length;

function loadQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    questionNumSpan.textContent = currentQuestion + 1;
    currentQuestionSpan.textContent = currentQuestion + 1;
    
    optionsContainer.innerHTML = '';
    selectedAnswer = null;
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)}.</span>
            <span>${option}</span>
        `;
        optionDiv.addEventListener('click', () => selectOption(index, optionDiv));
        optionsContainer.appendChild(optionDiv);
    });
    
    submitBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    feedback.classList.remove('show', 'correct', 'incorrect');
    submitBtn.disabled = true;
}

function selectOption(index, element) {
    if (submitBtn.style.display === 'none') return;
    
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    element.classList.add('selected');
    selectedAnswer = index;
    submitBtn.disabled = false;
}

function checkAnswer() {
    if (selectedAnswer === null) return;
    
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => {
        opt.classList.add('disabled');
    });
    
    if (selectedAnswer === question.correct) {
        options[selectedAnswer].classList.add('correct');
        feedback.textContent = '✓ Chính xác! Bạn đã chọn đúng đáp án.';
        feedback.classList.add('show', 'correct');
        score++;
        correctAnswers++;
        scoreSpan.textContent = score;
        correctSpan.textContent = correctAnswers;
    } else {
        options[selectedAnswer].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        feedback.textContent = `✗ Sai rồi! Đáp án đúng là: ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}`;
        feedback.classList.add('show', 'incorrect');
    }
    
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    finalScoreSpan.textContent = score;
    const percentage = Math.round((score / questions.length) * 100);
    percentageSpan.textContent = percentage;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    selectedAnswer = null;
    
    scoreSpan.textContent = score;
    correctSpan.textContent = correctAnswers;
    
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    
    loadQuestion();
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Load câu hỏi đầu tiên
loadQuestion();

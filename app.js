let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let selectedAnswer = null;
let currentMode = 'all';
let quizQuestions = [];
let timerInterval = null;
let timeRemaining = 600; // 10 phút

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
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
const examSelector = document.getElementById('exam-selector');
const modeSelector = document.getElementById('mode-selector');
const progressFill = document.getElementById('progress-fill');
const timerContainer = document.getElementById('timer-container');
const timerDisplay = document.getElementById('timer');
const modeInfo = document.getElementById('mode-info');
const backToExamBtn = document.getElementById('back-to-exam-btn');
const backToModeBtn = document.getElementById('back-to-mode-btn');

let selectedExam = '1';
let allQuestions = [...questions];

// Khởi tạo
quizQuestions = [...questionsSet1];
totalQuestionsSpan.textContent = quizQuestions.length;

// Chọn đề thi
const examBtns = examSelector.querySelectorAll('.mode-btn');
examBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        examBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedExam = btn.dataset.exam;
        
        // Cập nhật câu hỏi theo đề
        if (selectedExam === '1') {
            allQuestions = [...questionsSet1];
        } else if (selectedExam === '2') {
            allQuestions = [...questionsSet2];
        } else {
            allQuestions = [...questionsSet1, ...questionsSet2];
        }
        
        // Hiển thị chọn chế độ học
        examSelector.style.display = 'none';
        modeSelector.style.display = 'block';
    });
});

// Chọn chế độ học
const modeBtns = modeSelector.querySelectorAll('.mode-btn');
modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        startQuiz();
    });
});

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    selectedAnswer = null;
    
    // Chuẩn bị câu hỏi - luôn lấy tất cả câu hỏi của đề đã chọn
    quizQuestions = [...allQuestions];
    
    // Thiết lập timer cho chế độ thi
    if (currentMode === 'exam') {
        // Tính thời gian: 40 câu = 30 phút, 80 câu = 60 phút
        const timeInMinutes = quizQuestions.length === 40 ? 30 : 60;
        timeRemaining = timeInMinutes * 60;
        timerContainer.style.display = 'block';
        startTimer();
    } else {
        timerContainer.style.display = 'none';
        if (timerInterval) clearInterval(timerInterval);
    }
    
    // Hiển thị nút xem đáp án cho chế độ học
    if (currentMode === 'learn') {
        showAnswerBtn.style.display = 'inline-block';
    } else {
        showAnswerBtn.style.display = 'none';
    }
    
    totalQuestionsSpan.textContent = quizQuestions.length;
    scoreSpan.textContent = score;
    correctSpan.textContent = correctAnswers;
    
    // Hiển thị thông tin chế độ
    const examName = selectedExam === '1' ? 'Đề 1' : selectedExam === '2' ? 'Đề 2' : 'Tất cả';
    const modeName = currentMode === 'learn' ? '🎓 Chế độ Học' : '📝 Chế độ Thi';
    modeInfo.textContent = `${examName} - ${modeName}`;
    
    // Reset màu timer
    timerDisplay.style.background = 'var(--accent-color)';
    
    modeSelector.style.display = 'none';
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    
    loadQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Đổi màu khi còn 5 phút
        if (timeRemaining <= 300) {
            timerDisplay.style.background = '#ef4444';
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert('⏰ Hết giờ! Bài thi kết thúc.');
            showResults();
        }
    }, 1000);
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    progressFill.style.width = progress + '%';
}

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
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
    
    updateProgress();
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
    
    const question = quizQuestions[currentQuestion];
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

function showAnswer() {
    const question = quizQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => {
        opt.classList.add('disabled');
    });
    
    options[question.correct].classList.add('correct');
    feedback.textContent = `💡 Đáp án đúng là: ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}`;
    feedback.classList.add('show', 'correct');
    
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    if (timerInterval) clearInterval(timerInterval);
    
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    finalScoreSpan.textContent = score;
    const percentage = Math.round((score / quizQuestions.length) * 100);
    percentageSpan.textContent = percentage;
    
    // Cập nhật thông báo kết quả
    const resultTitle = document.querySelector('.result-card h2');
    if (currentMode === 'exam') {
        if (percentage >= 80) {
            resultTitle.textContent = '🎉 Xuất sắc! Đạt yêu cầu!';
        } else if (percentage >= 50) {
            resultTitle.textContent = '👍 Khá tốt! Cần cố gắng thêm!';
        } else {
            resultTitle.textContent = '💪 Cần ôn tập thêm!';
        }
    } else {
        resultTitle.textContent = '✅ Hoàn thành bài học!';
    }
}

function restartQuiz() {
    examSelector.style.display = 'block';
    modeSelector.style.display = 'none';
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    
    // Reset về đề 1
    examBtns.forEach(b => b.classList.remove('active'));
    examBtns[0].classList.add('active');
    selectedExam = '1';
    allQuestions = [...questionsSet1];
    
    if (timerInterval) clearInterval(timerInterval);
}

function backToExamSelection() {
    modeSelector.style.display = 'none';
    examSelector.style.display = 'block';
    
    // Reset chế độ về mặc định
    modeBtns.forEach(b => b.classList.remove('active'));
    modeBtns[0].classList.add('active');
    currentMode = 'learn';
}

function backToModeSelection() {
    if (confirm('Bạn có chắc muốn quay lại? Tiến trình hiện tại sẽ bị mất.')) {
        if (timerInterval) clearInterval(timerInterval);
        
        quizContainer.style.display = 'none';
        modeSelector.style.display = 'block';
        
        // Reset điểm
        currentQuestion = 0;
        score = 0;
        correctAnswers = 0;
        scoreSpan.textContent = score;
        correctSpan.textContent = correctAnswers;
    }
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
showAnswerBtn.addEventListener('click', showAnswer);
restartBtn.addEventListener('click', restartQuiz);
backToExamBtn.addEventListener('click', backToExamSelection);
backToModeBtn.addEventListener('click', backToModeSelection);

// Bắt đầu với màn hình chọn đề
examSelector.style.display = 'block';
modeSelector.style.display = 'none';
quizContainer.style.display = 'none';

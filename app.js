let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let selectedAnswer = null;
let currentMode = 'all';
let quizQuestions = [];
let timerInterval = null;
let timeRemaining = 600; // 10 phút
let userAnswers = []; // Lưu câu trả lời của user trong chế độ thi

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const exitQuizBtn = document.getElementById('exit-quiz-btn');
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
const exitQuizBtn = document.getElementById('exit-quiz-btn');
const reviewBtn = document.getElementById('review-btn');
const reviewContainer = document.getElementById('review-container');
const reviewContent = document.getElementById('review-content');
const backToResultBtn = document.getElementById('back-to-result-btn');
const restartFromReviewBtn = document.getElementById('restart-from-review-btn');

let selectedExam = '1';
let allQuestions = [];

// Khởi tạo
quizQuestions = [...questionsSet1];
totalQuestionsSpan.textContent = quizQuestions.length;

// Nút quay lại
const backToExamBtn = document.getElementById('back-to-exam-btn');
const backToModeBtn = document.getElementById('back-to-mode-btn');

backToModeBtn.addEventListener('click', () => {
    modeSelector.style.display = 'none';
    examSelector.style.display = 'block';
});

backToExamBtn.addEventListener('click', () => {
    examSelector.style.display = 'block';
    modeSelector.style.display = 'none';
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    if (timerInterval) clearInterval(timerInterval);
});

// Chọn đề thi
const examBtns = examSelector.querySelectorAll('.mode-btn');
examBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        examBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedExam = btn.dataset.exam;
        
        // Cập nhật câu hỏi theo đề
        switch(selectedExam) {
            case '1': allQuestions = [...questionsSet1]; break;
            case '2': allQuestions = [...questionsSet2]; break;
            case '3': allQuestions = [...questionsSet3]; break;
            case '4': allQuestions = [...questionsSet4]; break;
            case '5': allQuestions = [...questionsSet5]; break;
            case '6': allQuestions = [...questionsSet6]; break;
            case '7': allQuestions = [...questionsSet7]; break;
            case '8': allQuestions = [...questionsSet8]; break;
            case '9': allQuestions = [...questionsSet9]; break;
            case '10': allQuestions = [...questionsSet10]; break;
            case '11': allQuestions = [...questionsSet11]; break;
            case 'random':
                // Lấy ngẫu nhiên 40 câu từ đề 3-11
                const allQuestionsFrom3To11 = [
                    ...questionsSet3, ...questionsSet4, ...questionsSet5,
                    ...questionsSet6, ...questionsSet7, ...questionsSet8,
                    ...questionsSet9, ...questionsSet10, ...questionsSet11
                ];
                allQuestions = shuffleArray([...allQuestionsFrom3To11]).slice(0, 40);
                break;
            default: 
                allQuestions = [...questionsSet1];
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
    userAnswers = []; // Reset câu trả lời
    
    // Chuẩn bị câu hỏi - luôn lấy tất cả câu hỏi của đề đã chọn
    quizQuestions = [...allQuestions];
    
    // Khởi tạo mảng lưu câu trả lời
    userAnswers = new Array(quizQuestions.length).fill(null);
    
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
    const examNames = {
        '1': 'Đề 1',
        '2': 'Đề 2',
        '3': 'Đề 3: Group User',
        '4': 'Đề 4: Domain & Account',
        '5': 'Đề 5: FSMO Roles',
        '6': 'Đề 6: DHCP',
        '7': 'Đề 7: Trust',
        '8': 'Đề 8: GPO',
        '9': 'Đề 9: DNS & RODC',
        '10': 'Đề 10: Remote Access',
        '11': 'Đề 11: Định tuyến',
        'random': '🎲 Đề ngẫu nhiên'
    };
    const examName = examNames[selectedExam] || 'Đề thi';
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
    
    // Lấy câu trả lời đã chọn trước đó (nếu có)
    selectedAnswer = userAnswers[currentQuestion];
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        // Đánh dấu nếu đã chọn trước đó
        if (selectedAnswer === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)}.</span>
            <span>${option}</span>
        `;
        optionDiv.addEventListener('click', () => selectOption(index, optionDiv));
        optionsContainer.appendChild(optionDiv);
    });
    
    // Chế độ thi: chỉ hiển thị nút Next/Prev/Submit
    if (currentMode === 'exam') {
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
        prevBtn.style.display = currentQuestion > 0 ? 'inline-block' : 'none';
        
        // Nếu là câu cuối, đổi text thành "Nộp bài"
        if (currentQuestion === quizQuestions.length - 1) {
            nextBtn.textContent = '📝 Nộp bài';
            nextBtn.className = 'btn btn-primary';
        } else {
            nextBtn.textContent = 'Câu tiếp theo →';
            nextBtn.className = 'btn btn-secondary';
        }
    } else {
        // Chế độ học: hiển thị nút kiểm tra
        submitBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
        submitBtn.disabled = selectedAnswer === null;
    }
    
    feedback.classList.remove('show', 'correct', 'incorrect');
    
    updateProgress();
}

function selectOption(index, element) {
    // Trong chế độ thi, cho phép chọn lại
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    element.classList.add('selected');
    selectedAnswer = index;
    
    // Lưu câu trả lời
    userAnswers[currentQuestion] = index;
    
    // Chỉ enable nút submit trong chế độ học
    if (currentMode === 'learn') {
        submitBtn.disabled = false;
    }
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
    // Trong chế độ thi
    if (currentMode === 'exam') {
        // Nếu là câu cuối, nộp bài
        if (currentQuestion === quizQuestions.length - 1) {
            // Kiểm tra xem đã trả lời hết chưa
            const unanswered = userAnswers.filter(a => a === null).length;
            if (unanswered > 0) {
                if (!confirm(`Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc muốn nộp bài?`)) {
                    return;
                }
            }
            gradeExam();
            return;
        }
        
        // Chuyển câu tiếp theo
        currentQuestion++;
        loadQuestion();
    } else {
        // Chế độ học: chuyển câu bình thường
        currentQuestion++;
        
        if (currentQuestion < quizQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
}

function gradeExam() {
    if (timerInterval) clearInterval(timerInterval);
    
    // Chấm điểm
    score = 0;
    correctAnswers = 0;
    
    quizQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
            correctAnswers++;
        }
    });
    
    showResults();
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

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function exitQuiz() {
    const confirmExit = confirm('Bạn có chắc muốn thoát? Tiến trình sẽ không được lưu.');
    if (confirmExit) {
        if (timerInterval) clearInterval(timerInterval);
        examSelector.style.display = 'block';
        modeSelector.style.display = 'none';
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'none';
    }
}

function showReview() {
    resultContainer.style.display = 'none';
    reviewContainer.style.display = 'block';
    
    let reviewHTML = '';
    
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        reviewHTML += `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <span class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✓ Đúng' : '✗ Sai'}
                </span>
                <div class="review-question">
                    Câu ${index + 1}: ${question.question}
                </div>
        `;
        
        // Hiển thị câu trả lời của user
        if (userAnswer !== null) {
            reviewHTML += `
                <div class="review-answer ${isCorrect ? 'correct-answer' : 'wrong-answer'}">
                    <strong>Bạn chọn:</strong> ${String.fromCharCode(65 + userAnswer)}. ${question.options[userAnswer]}
                </div>
            `;
        } else {
            reviewHTML += `
                <div class="review-answer wrong-answer">
                    <strong>Bạn chọn:</strong> Chưa trả lời
                </div>
            `;
        }
        
        // Nếu sai, hiển thị đáp án đúng
        if (!isCorrect) {
            reviewHTML += `
                <div class="review-answer correct-answer">
                    <strong>Đáp án đúng:</strong> ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}
                </div>
            `;
        }
        
        reviewHTML += `</div>`;
    });
    
    reviewContent.innerHTML = reviewHTML;
}

function backToResult() {
    reviewContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
showAnswerBtn.addEventListener('click', showAnswer);
restartBtn.addEventListener('click', restartQuiz);
exitQuizBtn.addEventListener('click', exitQuiz);
reviewBtn.addEventListener('click', showReview);
backToResultBtn.addEventListener('click', backToResult);
restartFromReviewBtn.addEventListener('click', restartQuiz);

// Bắt đầu với màn hình chọn đề
examSelector.style.display = 'block';
modeSelector.style.display = 'none';
quizContainer.style.display = 'none';

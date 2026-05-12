const quizData = [
    {
        question: "Which hardware component is known as the brain of the computer?",
        a: "RAM",
        b: "CPU",
        c: "GPU",
        d: "SSD",
        correct: "b"
    },
    {
        question: "Which device is used to permanently store data?",
        a: "Monitor",
        b: "RAM",
        c: "Hard Drive",
        d: "Keyboard",
        correct: "c"
    },
    {
        question: "What does RAM stand for?",
        a: "Read Access Memory",
        b: "Random Access Memory",
        c: "Run Access Module",
        d: "Rapid Application Memory",
        correct: "b"
    },
    {
        question: "Which component supplies power to the computer?",
        a: "Motherboard",
        b: "Cooling Fan",
        c: "Power Supply Unit",
        d: "Processor",
        correct: "c"
    },
    {
        question: "Which hardware component displays visual output?",
        a: "Mouse",
        b: "Printer",
        c: "Scanner",
        d: "Monitor",
        correct: "d"
    },
    {
        question: "Which port is commonly used for connecting modern monitors?",
        a: "HDMI",
        b: "PS/2",
        c: "VGA",
        d: "Ethernet",
        correct: "a"
    },
    {
        question: "What is the main circuit board of a computer called?",
        a: "Processor",
        b: "Motherboard",
        c: "Heat Sink",
        d: "Power Board",
        correct: "b"
    },
    {
        question: "Which hardware device is used to input text into a computer?",
        a: "Monitor",
        b: "Mouse",
        c: "Keyboard",
        d: "Speaker",
        correct: "c"
    },
    {
        question: "Which component is mainly responsible for graphics processing?",
        a: "GPU",
        b: "CPU",
        c: "SSD",
        d: "RAM",
        correct: "a"
    },
    {
        question: "Which storage device is generally faster?",
        a: "DVD",
        b: "HDD",
        c: "SSD",
        d: "Floppy Disk",
        correct: "c"
    },
    {
        question: "Which hardware component keeps the CPU cool?",
        a: "Speaker",
        b: "Cooling Fan",
        c: "Scanner",
        d: "Microphone",
        correct: "b"
    },
    {
        question: "What device allows a computer to connect to a network wirelessly?",
        a: "Sound Card",
        b: "Graphics Card",
        c: "Wi-Fi Adapter",
        d: "Heat Sink",
        correct: "c"
    }
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answer => {
        answer.checked = false;
    });
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.querySelector(".quiz-box").innerHTML = `
                <div style="padding: 50px; text-align: center; color: white;">
                    <h1 style="margin-bottom: 20px;">Quiz Completed 🎉</h1>
                    <h2 style="margin-bottom: 30px;">
                        You scored ${score} out of ${quizData.length}
                    </h2>
                    <button onclick="location.reload()">
                        Restart Quiz
                    </button>
                </div>
            `;
        }
    }
});
```
      

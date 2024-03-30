function Question(statement, options, rightAnswer) {
    this.statement = statement;
    this.options = options;
    this.rightAnswer = rightAnswer;
}

const questions = [];

questions[0] = new Question('What country has the highest life expectancy?', 
['Switzerland', 'Hong Kong', 'Japan', 'China'], 2);

questions[1] = new Question('Where would you be if you were standing on the Spanish Steps?', 
['Madrid', 'Rome', 'Barcelona', 'Moscow'], 2);

questions[2] = new Question('How many minutes are in a full week? ', 
['7,320', '12,560', '10,080', '14,600'], 3);

questions[3] = new Question('What country drinks the most coffee per capita?',
['Finland', 'Brazil', 'United States', 'Germany'], 1);

questions[4] = new Question('How many elements are in the periodic table?', 
[114, 118, 124, 117], 2);

questions[5] = new Question('What company was originally called "Cadabra"?', 
['BMW', 'Samsung', 'Renault', 'Amazon'], 4);

questions[6] = new Question('How many bones do we have in an ear?', [4, 11, 3, 1], 3);

questions[7] = new Question('What is the largest Spanish-speaking city in the world?', 
['Madrid', 'Berlin', 'Mexico City', 'Buenos Aires'], 3);

questions[8] = new Question('In what country is the Chernobyl nuclear plant located?', 
['Russia', 'Germany', 'Ukraine', 'Poland'], 3);

questions[9] = new Question('Who was the Ancient Greek God of the Sun?', 
['Apollo', 'Atenas', 'Poseidon', 'Zeus'], 0);

const optionsElements = document.querySelectorAll('.option');
const markersElements = document.querySelectorAll('.circle');

let i = 0;
let optionsSelected = 0;
let countRight = 0;

optionsElements.forEach(element => {
    element.addEventListener('click', () => {
        let option = element.value;
        console.log(option);
        if (optionsSelected === 0) {
            if (questions[i].rightAnswer == option) {
                element.classList.add('right-answer');
                markersElements[i].classList.add('right-marker');
                countRight++;
            } else {
                element.classList.add('wrong-answer');
                markersElements[i].classList.add('wrong-marker');
            }
            optionsSelected++;
        }
    })
})

const questionNumber = document.querySelector('.question-number');
const questionWording = document.querySelector('.question-wording');
const option1Element = document.querySelector('#option1');
const option2Element = document.querySelector('#option2');
const option3Element = document.querySelector('#option3');
const option4Element = document.querySelector('#option4');

const nextElement = document.querySelector('.next-question');

nextElement.addEventListener('click', () => {
    if (optionsSelected === 1) {
        if (i < 9) {
            i++;
            optionsElements.forEach(option => {
                option.classList.remove('right-answer');
                option.classList.remove('wrong-answer');
            })
            questionNumber.innerHTML = `Question ${i + 1}/10`;
            questionWording.innerHTML = questions[i].statement;
            option1Element.innerHTML = questions[i].options[0];
            option2Element.innerHTML = questions[i].options[1];
            option3Element.innerHTML = questions[i].options[2];
            option4Element.innerHTML = questions[i].options[3];
            optionsSelected = 0;
        }
        else {
            questionNumber.className = 'hidden';
            questionWording.className = 'hidden';
            optionsElements.forEach(option => {
                option.className = 'hidden';
            })
            markersElements.forEach(element => {
                element.className = 'hidden'
            })
            const finalMessage = document.createElement('div');
            finalMessage.innerText = 'Try again!';
            nextElement.innerText = 'RESTART';
            nextElement.classList.add('final-button');
            nextElement.addEventListener('click', () => {
                location.reload();
            })
            finalMessage.setAttribute('class', 'final-message');
            document.querySelector('body').appendChild(finalMessage);
        }
    }
})
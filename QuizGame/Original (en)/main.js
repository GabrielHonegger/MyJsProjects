function Question(statement, options, rightOption) {
    this.statement = statement;
    this.options = options;
    this.rightOption = rightOption;
}

var question = [];

question[0] = new Question('What country has the highest life expectancy?', 
['Switzerland', 'Hong Kong', 'Japan', 'China'], 'Hong Kong');

question[1] = new Question('Where would you be if you were standing on the Spanish Steps?', 
['Madrid', 'Rome', 'Barcelona', 'Moscow'], 'Rome');

question[2] = new Question('How many minutes are in a full week? ', 
['7,320', '12,560', '10,080', '14,600'], '10,080');

question[3] = new Question('What country drinks the most coffee per capita?',
['Finland', 'Brazil', 'United States', 'Germany'], 'Finland');

question[4] = new Question('How many elements are in the periodic table?', 
[114, 118, 124, 117], 118);

question[5] = new Question('What company was originally called "Cadabra"?', 
['BMW', 'Samsung', 'Renault', 'Amazon'], 'Amazon');

question[6] = new Question('How many bones do we have in an ear?', [4, 11, 3, 1], 3);

question[7] = new Question('What is the largest Spanish-speaking city in the world?', 
['Madrid', 'Berlin', 'Mexico City', 'Buenos Aires'], 'Mexico City');

question[8] = new Question('In what country is the Chernobyl nuclear plant located?', 
['Russia', 'Germany', 'Ukraine', 'Poland'], 'Ukraine');

question[9] = new Question('Who was the Ancient Greek God of the Sun?', 
['Apollo', 'Atenas', 'Poseidon', 'Zeus'], 'Apollo');

var score = 0;
var i = 0;
var answered = false;

document.getElementById('option1').addEventListener("click", function() {
    if (answered == false) {
        if (question[i].options[0] == question[i].rightOption) {
            document.getElementById('option1').className = "correct";
            score++;
            document.getElementById('score').textContent = 'Your score: ' + score;
        }
        else {
            document.getElementById('option1').className = "wrong";
        }
        i++;
        answered = true;
        changeQuestion(i);
    }
});

document.getElementById('option2').addEventListener("click", function() {
    if (answered == false) {
        if (question[i].options[1] == question[i].rightOption) {
            document.getElementById('option2').className = "correct";
            score++;
            document.getElementById('score').textContent = 'Your score: ' + score;
        }
        else {
            document.getElementById('option2').className = "wrong";
        }
        i++;
        answered = true;
        changeQuestion(i);
    }
});

document.getElementById('option3').addEventListener("click", function() {
    if (answered == false) {
        if (question[i].options[2] == question[i].rightOption) {
            document.getElementById('option3').className = "correct";
            score++;
            document.getElementById('score').textContent = 'Your score: ' + score;
        }
        else {
            document.getElementById('option3').className = "wrong";
        }
        i++;
        answered = true;
        changeQuestion(i);
    }
});

document.getElementById('option4').addEventListener("click", function() {
    if (answered == false) {
        if (question[i].options[3] == question[i].rightOption) {
            document.getElementById('option4').className = "correct";
            score++;
            document.getElementById('score').textContent = 'Your score: ' + score;
        }
        else {
            document.getElementById('option4').className = "wrong";
        }
        i++;
        answered = true;
        changeQuestion(i);
    }
});

function showScore() {
    document.getElementById('option1').className = 'hidden';
    document.getElementById('option2').className = 'hidden';
    document.getElementById('option3').className = 'hidden';
    document.getElementById('option4').className = 'hidden';
    document.getElementById('next').className = 'hidden';
    document.getElementById('numberQuestion').className = 'hidden';
    if (score == 10) {
        document.getElementById('question').className = 'goodMessage';
        document.getElementById('score').className = 'goodMessage';
        document.getElementById('question').textContent = 'Congratulations! You did the best score possible!';
        document.getElementById('score').textContent = 'Your score: ' + score;
    }
    else if (score > 4 && score < 10) {
        document.getElementById('question').className = 'goodMessage';
        document.getElementById('score').className = 'goodMessage';
        document.getElementById('question').textContent = 'Good job! But you can do more than that!';
        document.getElementById('score').textContent = 'Your score: ' + score;
    }
    else {
        document.getElementById('question').className = 'tryAgainMessage';
        document.getElementById('score').className = 'tryAgainMessage';
        document.getElementById('question').textContent = 'Try again!';
        document.getElementById('score').textContent = 'Your score: ' + score;
    }
}

function changeQuestion(i) {
    document.getElementById('next').addEventListener('click', function() {
        if (i == 10) {
            showScore();
        }
        document.getElementById('question').textContent = question[i].statement;
        document.getElementById('option1').textContent = question[i].options[0];
        document.getElementById('option2').textContent = question[i].options[1];
        document.getElementById('option3').textContent = question[i].options[2];
        document.getElementById('option4').textContent = question[i].options[3];
        document.getElementById('option1').className = "button";
        document.getElementById('option2').className = "button";
        document.getElementById('option3').className = "button";
        document.getElementById('option4').className = "button";
        document.getElementById('numberQuestion').textContent = 'Question ' + (i + 1) + ' (of 10)';
        answered = false;
    });
}
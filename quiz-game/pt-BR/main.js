function Question(statement, options, rightOption) {
    this.statement = statement;
    this.options = options;
    this.rightOption = rightOption;
}

var question = [];

question[0] = new Question('Quantos fusos horários existem na Rússia?', 
[5, 8, 3, 11], 11);

question[1] = new Question('Qual país tem mais ilhas no mundo?', 
['Suécia, com 220,000', 'Indonésia, com 302', 'Dinamarca, com 22', 'Japão, com 82'], 'Suécia, com 220,000');

question[2] = new Question('Qual dos impérios a seguir não possui um idioma escrito:', 
['Inca', 'Azteca', 'Egípcio', 'Romano'], 'Inca');

question[3] = new Question('Qual é o rio mais longo do mundo?',
['Rio Grandus, 8745km', 'Rio Sena, 4276km', 'Rio Tietê, 2220km', 'Rio Nilo, 6650km'], 'Rio Nilo, 6650km');

question[4] = new Question('Qual é a série de livros mais vendida do século 21?', 
['Percy Jackson', 'O Diário de um Banana', 'Harry Potter', 'Senhor dos Anéis'], 'Harry Potter');

question[5] = new Question('Quando o metrô de Londres foi inaugurado?', 
[1714, 1834, 1921, 1863], 1863);

question[6] = new Question('Quantas tiras há na bandeira dos Estados Unidos?', [13, 11, 16, 9], 13);

question[7] = new Question('Qual é o animal nacional da Austrália?', 
['Coala pardo', 'Canguru vermelho', 'Coiote dourado', 'Canguru marron'], 'Canguru vermelho');

question[8] = new Question('Até 1923, como era chamada a cidade turca de Istambul?', 
['Constantinopla', 'Roma', 'Abudabi', 'Taj Mahal'], 'Constantinopla');

question[9] = new Question('Quem inventou o WWW (World Wide Web), e quando?', 
['Steve Jobs, 1973', 'Bill Gates, 1984', 'Tim Berners-Lee, 1990', 'Gandhi, 1997'], 'Tim Berners-Lee, 1990');

question[10] = new Question('Qual artista pintou o teto da Capela Sistina, em Roma?', 
['Raphael', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'], 'Michelangelo');

question[11] = new Question('O que aconteceu em 20 de Julho de 1969?', 
['Brasil venceu a Copa', 'Início da Ditadura do Brasil', 'Apollo 11 pousou na lua', 
'Fim da Guerra Fria'], 'Apollo 11 pousou na lua');

question[12] = new Question('Qual é o menor país do mundo?', 
['Vaticano', 'Mônaco', 'Guatemala', 'Ecuador'], 'Vaticano');

question[13] = new Question('Qual idioma tem o maior número de palavras (de acordo com dicionários)?', 
['Alemão, com 220,000 palavras', 'Inglês, com 200,000 palavras', 'Chinês, com 460.000 palavras', 
'Latim, com 280,000 palavras'], 'Inglês, com 200,000 palavras');

question[14] = new Question('De qual cidade vieram os Beatles?', 
['Nova York', 'Missisipe', 'Arsenal', 'Liverpool'], 'Liverpool');

question[15] = new Question('Quantas teclas há em um piano clássico?', [62, 48, 96, 88], 88);

question[16] = new Question('Qual é a flor nacional do Japão?', 
['Flor de Cerejeira', 'Flor de Lotus', 'Flor do Amanhã', 'Flor da Sorte'], 'Flor de Cerejeira');

question[17] = new Question('O artista norueguês Edvard Munch é famoso por pintar qual peça icônica?', 
['O Apanhado de Formigas', 'O Grito', 'Terra Verde', 'Lombardia'], 'O Grito');

question[18] = new Question('Onde foram realizados os primeiros Jogos Olímpicos modernos?', 
['Londres, 1878', 'Berlin, 1912', 'Roma, 1746', 'Atenas, 1896'], 'Atenas, 1896');

question[19] = new Question('Qual o nome do primeiro filme da Pixar?', 
['Procurando Nemo', 'Carros', 'Toy Story', 'Procurando Dory'], 'Toy Story');


var score = 0;
var i = 0;
var answered = false;

document.getElementById('option1').addEventListener("click", function() {
    if (answered == false) {
        if (question[i].options[0] == question[i].rightOption) {
            document.getElementById('option1').className = "correct";
            score++;
            document.getElementById('score').textContent = 'Pontuação: ' + score;
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
            document.getElementById('score').textContent = 'Pontuação: ' + score;
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
            document.getElementById('score').textContent = 'Pontuação: ' + score;
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
            document.getElementById('score').textContent = 'Pontuação: ' + score;
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
    if (score == 20) {
        document.getElementById('question').className = 'goodMessage';
        document.getElementById('score').className = 'goodMessage';
        document.getElementById('question').textContent = 'Parabéns! Você acertou todas!';
        document.getElementById('score').textContent = 'Pontuação final: ' + score;
    }
    else if (score > 9 && score < 20) {
        document.getElementById('question').className = 'goodMessage';
        document.getElementById('score').className = 'goodMessage';
        document.getElementById('question').textContent = 'Bom trabalho! Mas aposto que você consegue fazer ainda melhor!';
        document.getElementById('score').textContent = 'Pontuação final: ' + score;
    }
    else {
        document.getElementById('question').className = 'tryAgainMessage';
        document.getElementById('score').className = 'tryAgainMessage';
        document.getElementById('question').textContent = 'Tente novamente!';
        document.getElementById('score').textContent = 'Pontuação final: ' + score;
    }
}

function changeQuestion(i) {
    document.getElementById('next').addEventListener('click', function() {
        if (i == 20) {
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
        document.getElementById('numberQuestion').textContent = 'Pergunta ' + (i + 1) + ' (de 20)';
        answered = false;
    });
}
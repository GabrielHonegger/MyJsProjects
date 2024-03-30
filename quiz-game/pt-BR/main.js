function Question(statement, options, rightAnswer) {
    this.statement = statement;
    this.options = options;
    this.rightAnswer = rightAnswer;
}

const questions = [];

questions[0] = new Question('Quantos fusos horários existem na Rússia?', 
[5, 8, 3, 11], 4);

questions[1] = new Question('Qual país tem mais ilhas no mundo?', 
['Suécia, com 220,000', 'Indonésia, com 302', 'Dinamarca, com 22', 'Japão, com 82'], 1);

questions[2] = new Question('Qual dos impérios a seguir não possui um idioma escrito:', 
['Inca', 'Azteca', 'Egípcio', 'Romano'], 1);

questions[3] = new Question('Qual é o rio mais longo do mundo?',
['Rio Grandus, 8745km', 'Rio Sena, 4276km', 'Rio Tietê, 2220km', 'Rio Nilo, 6650km'], 4);

questions[4] = new Question('Qual é a série de livros mais vendida do século 21?', 
['Percy Jackson', 'O Diário de um Banana', 'Harry Potter', 'Senhor dos Anéis'], 3);

questions[5] = new Question('Quando o metrô de Londres foi inaugurado?', 
[1714, 1834, 1921, 1863], 4);

questions[6] = new Question('Quantas tiras há na bandeira dos Estados Unidos?', [13, 11, 16, 9], 1);

questions[7] = new Question('Qual é o animal nacional da Austrália?', 
['Coala pardo', 'Canguru vermelho', 'Coiote dourado', 'Canguru marron'], 2);

questions[8] = new Question('Até 1923, como era chamada a cidade turca de Istambul?', 
['Constantinopla', 'Roma', 'Abudabi', 'Taj Mahal'], 1);

questions[9] = new Question('Quem inventou o WWW (World Wide Web), e quando?', 
['Steve Jobs, 1973', 'Bill Gates, 1984', 'Tim Berners-Lee, 1990', 'Gandhi, 1997'], 3);

questions[10] = new Question('Qual artista pintou o teto da Capela Sistina, em Roma?', 
['Raphael', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'], 4);

questions[11] = new Question('O que aconteceu em 20 de Julho de 1969?', 
['Brasil venceu a Copa', 'Início da Ditadura do Brasil', 'Apollo 11 pousou na lua', 
'Fim da Guerra Fria'], 3);

questions[12] = new Question('Qual é o menor país do mundo?', 
['Vaticano', 'Mônaco', 'Guatemala', 'Ecuador'], 1);

questions[13] = new Question('Qual idioma tem o maior número de palavras (de acordo com dicionários)?', 
['Alemão, com 220,000 palavras', 'Inglês, com 200,000 palavras', 'Chinês, com 460.000 palavras', 
'Latim, com 280,000 palavras'], 2);

questions[14] = new Question('De qual cidade vieram os Beatles?', 
['Nova York', 'Missisipe', 'Arsenal', 'Liverpool'], 4);

questions[15] = new Question('Quantas teclas há em um piano clássico?', [62, 48, 96, 88], 4);

questions[16] = new Question('Qual é a flor nacional do Japão?', 
['Flor de Cerejeira', 'Flor de Lotus', 'Flor do Amanhã', 'Flor da Sorte'], 1);

questions[17] = new Question('O artista norueguês Edvard Munch é famoso por pintar qual peça icônica?', 
['O Apanhado de Formigas', 'O Grito', 'Terra Verde', 'Lombardia'], 2);

questions[18] = new Question('Onde foram realizados os primeiros Jogos Olímpicos modernos?', 
['Londres, 1878', 'Berlin, 1912', 'Roma, 1746', 'Atenas, 1896'], 4);

questions[19] = new Question('Qual o nome do primeiro filme da Pixar?', 
['Procurando Nemo', 'Carros', 'Toy Story', 'Procurando Dory'], 3);

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
        if (i < 19) {
            i++;
            optionsElements.forEach(option => {
                option.classList.remove('right-answer');
                option.classList.remove('wrong-answer');
            })
            questionNumber.innerHTML = `Questão ${i + 1}/20`;
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
            if (countRight == 20) {
                finalMessage.innerText = 'Ótimo Trabalho! Você acertou todas as perguntas!';
                nextElement.className = 'hidden';
            } else if (countRight > 15) {
                finalMessage.innerText = `Muito bom! Você acertou ${countRight} (de 20),
                mas aposto que consegue fazer ainda melhor!`;
                nextElement.innerText = 'RECOMEÇAR';
            } else  if (countRight > 10) {
                finalMessage.innerText = `Você acertou ${countRight} (de 20),
                está no caminho certo!`;
                nextElement.innerText = 'RECOMEÇAR';
            } else if (countRight > 5) {
                finalMessage.innerText = `Você acertou ${countRight} (de 20)!`;
                nextElement.innerText = 'RECOMEÇAR';
            } else {
                finalMessage.innerText = `Você acertou ${countRight} (de 20), tente
                mais uma vez!`;
                nextElement.innerText = 'RECOMEÇAR';
            }
            nextElement.classList.add('final-button');
            nextElement.addEventListener('click', () => {
                location.reload();
            })
            finalMessage.setAttribute('class', 'final-message');
            document.querySelector('body').appendChild(finalMessage);
        }
    }
})
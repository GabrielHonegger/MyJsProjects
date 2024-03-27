let calculation = localStorage.getItem('calculation') || '';
console.log(calculation);
document.querySelector('.js-output').innerHTML = calculation;

let lastValue;
let bracketOn = false;
function updateCalculation(value) {
    calculation = localStorage.getItem('calculation') || '';
    let calcLen = calculation.length;
    if ((['+', '-', '*', '/', '.'].includes(value.trim())) 
    && (['+', '-', '*', '/', '.'].includes(lastValue.trim()))) {
        console.log ('Error!');
    } else if (value === '()') {
        if (bracketOn === false) {
            calculation += '(';
            bracketOn = true;
        }
        else {
            calculation += ')';
            bracketOn = false;
        }
        console.clear(); 
        document.querySelector('.js-output').innerHTML = calculation.replace('*', 'x').replace('/', '÷');
        console.log(calculation);
        localStorage.setItem('calculation', calculation);
    }  else if (calcLen < 12) {
        calculation += value;
        console.clear(); 
        document.querySelector('.js-output').innerHTML = calculation.replace('*', 'x').replace('/', '÷');
        console.log(calculation);
        localStorage.setItem('calculation', calculation);
    } else {
        alert("Can't enter more than 12 digits.");
    }
    lastValue = value;
}

function calculateResult() {
    calculation = eval(calculation);
    console.clear();
    document.querySelector('.js-output').innerHTML = Number.isInteger(Number(calculation)) ? calculation : String(Number(calculation).toFixed(2));
    console.log('The result is ' + calculation); 
    localStorage.setItem('calculation', calculation);
}

function resetCalculation() {
    console.clear();
    document.querySelector('.js-output').innerHTML = '';
    calculation = '';
    localStorage.setItem('calculation', calculation);
}

function changeTheme() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('keydown', (event) => {
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    .includes(event.key)) {
        updateCalculation(event.key);
    } else if (['Enter'].includes(event.key)) {
        calculateResult();
    }
    
})

// JSON is used for when we store data.
// JSON.stringify() - Javascript Object to JSON
// JSON.parse() - JSON to Javascript Object

/*
localStorage.setItem('name', value) -  to save a value inside local storage, it
receives 2 arguments, 'name' is the name we want to refer to use it, value is the value
we want to store, it needs to be a string, so we need to convert the object into a 
string with JSON
*/ 

/* localStorage.getItem('name') - get the value out of local storage. So we use
it to restore the value we saved with setItem.
*/

/* localStorage.removeItem('name') - removes the value from the local storage.
*/
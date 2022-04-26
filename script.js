const display = document.querySelector('.display');
const keyboard = document.querySelectorAll('.keyboard>div');
const arithmetic = document.querySelectorAll('.arithmetic');

const theme = document.querySelector('.theme-switch');

let num = '';
let num1;
let num2;
let operation;


function result(num1, operation, num2) {
    if (operation === '+') return num1 - (-num2);
    else if (operation === '-') return +num1 - num2;
    else if (operation === 'x') return +num1 * num2;
    else return +num1 / num2;
}


keyboard.forEach(key => {
    key.addEventListener('click', e => {
        if (!num1 && e.target.classList.contains('number')) {
            num += e.target.textContent;
            display.textContent = parseFloat(num);
        } else if (num && !num1 && e.target.classList.contains('arithmetic')) {
            num1 = num;
            operation = e.target.textContent;
            num = '';
            display.textContent = parseFloat(num1);

        } else if (num1 && operation && !num2 && e.target.classList.contains('number')) {
            num += e.target.textContent;
            display.textContent = parseFloat(num);
        } else if (num && num1 && operation && !num2 && e.target.classList.contains('equals')) {
            num2 = num;
            num1 = parseFloat(result(num1, operation, num2));
            display.textContent = num1;
            num = '';
            num1 = undefined;
            num2 = undefined;
            operation = undefined;


        } else if (e.target.classList.contains('reset')) {
            num = '';
            num1 = undefined;
            num2 = undefined;
            operation = undefined;
            display.textContent = 0;
        } else if (e.target.classList.contains('del')) {
            num = num.slice(0, -1);
            display.textContent = num;
        }
    })
});


theme.addEventListener('input', () => {
    if (theme.value == 1) {
        document.body.classList.add('theme1');
        document.body.classList.remove('theme2');
        document.body.classList.remove('theme3');
    } else if (theme.value == 2) {
        document.body.classList.add('theme2');
        document.body.classList.remove('theme1');
        document.body.classList.remove('theme3');
    } else if (theme.value == 3) {
        document.body.classList.add('theme3');
        document.body.classList.remove('theme2');
        document.body.classList.remove('theme1');
    }
})
// Install code
const readLineSync = require('readline-sync')
const {sum, res, mul, div} = require('./math')

const operations =['sum', 'res', 'mul', 'div'];
const index = readLineSync.keyInSelect(operations, 'Which operation do you want?');

let firstNumber
let secondNumber

if (index !== -1) {
     firstNumber = readLineSync.questionInt('Input fisrt number:  ');
     secondNumber = readLineSync.questionInt('Input second number:  '); 
}



switch(index){
    case 0:
       console.log(sum(firstNumber, secondNumber)); 
        break;
    case 1:
    console.log(res(firstNumber, secondNumber));
        break;

    case 2:
    console.log(mul(firstNumber, secondNumber));
        break;

    case 3:
    console.log(div(firstNumber, secondNumber));
        break;

    default:
        console.log('Nothing');
}


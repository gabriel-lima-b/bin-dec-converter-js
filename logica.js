//Conversor binario -> decimal no console

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let decimal;
decimal = 0;

rl.question('Digite um numero binario: ', (answer) => {
   
    for (let c = 0; c < answer.length; c++) decimal += Math.pow(2, c) * answer[answer.length - c - 1];
  
   console.log('O binario em decimal é: ' + decimal);

  rl.close();
});

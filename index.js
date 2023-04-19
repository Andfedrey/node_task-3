const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const {requestForAPI} = require('./server.js')


rl.question('Введите название города: ', (answer) => {
  const url = `${process.env.URL}&query=${answer}`
  requestForAPI(url)
  rl.close();
});
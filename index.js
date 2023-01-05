const readline = require('readline');
const quotes = require('./quotes.json')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async function run() {
    const randomNumber = Math.floor(Math.random() * quotes.length + 1);
    console.log(`\nSelected random number: ${randomNumber}\nYour random Chuck Norris quote is:\n${quotes[randomNumber]}`)
    const userInput = await new Promise(resolve => rl.question('another? y/n ', resolve))
    if (userInput.toLowerCase() !== 'y') process.exit()
    run()
})()


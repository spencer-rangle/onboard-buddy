import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function promptUser() {
  rl.question(`Enter your message (or type "exit" to quit): `, (message) => {
    if (message.toLowerCase() === 'exit') {
      rl.close();
      return;
    }
    console.log(`You entered: ${message}`);

    promptUser();
  });
}

promptUser();

// rl.question('Enter your message: ', (message) => {
//   console.log(`You entered: ${message}`);
//   // Add your logic or API calls here to generate a response
//   // rl.close();
// });

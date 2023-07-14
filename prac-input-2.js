import * as readline from 'readline';
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains'

import * as dotenv from "dotenv";
dotenv.config();

const model = new OpenAI({ temperature: 0.3 });
const memory = new BufferMemory()
const chain = new ConversationChain({
  llm: model,
  memory: memory
});
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let curPersonality;
const personalities = [
  'A Surfer Dude',
  'An Offensive, Insulting, Asshole',
  'Hyper and excited',
];
// You can change this to a different personality
// See msgForInput
// curPersonality = personalities[1];

const doLangchainStuff = async (msg) => {
  let msgForInput = msg;
  if (curPersonality) {
    msgForInput += ` Respond as if you are ${curPersonality}`;
  }
  const resp = await chain.call({
    input: msgForInput,
  });
  console.log(resp);
}

const promptUser = () => {
  rl.question(`Enter your message (or type "exit" to quit): `, async (message) => {
    if (message.toLowerCase() === 'exit') {
      rl.close();
      return;
    }
    console.log(`You entered: ${message}`);
    await doLangchainStuff(message);
    promptUser();
  });
}

promptUser();

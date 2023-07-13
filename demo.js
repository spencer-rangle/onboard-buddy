import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

import * as dotenv from "dotenv";
dotenv.config();

const myProduct = 'couches'

const template = 
// VV All three work
  // `For a company that makes ${myProduct}, what is a good, funny company name?`;
  "For a company that makes {product}, what is a good, funny company name?";
  // "For a company that makes colorful socks, what is a good company name?";
const promptTemplate = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

const formattedPrompt = await promptTemplate.format({
  product: "colorful socks"
})

console.log(formattedPrompt)


const model = new OpenAI({
  // openAIApiKey: OPENAI_API_KEY, // << Not needed cuz langchain will auto look for it
  temparature: 0.3,
});

const chain = new LLMChain({
  llm: model,
  prompt: promptTemplate
});

const chainRes = await chain.call({
  product: 'colorful socks',
});

console.log(chainRes);


// VV Promise
// const res = await model.call(
//   "For a company that makes colorful socks, what is a good company name?"
//   // "What is a good company name?"
//   );
// console.log(res);
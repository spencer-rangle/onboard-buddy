import { Component } from '@angular/core';
// import * as readline from 'readline';
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains'
import { environment } from 'src/environments'; 

// import * as dotenv from "dotenv";
// dotenv.config();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe-app';

  AIModel = new OpenAI({
    openAIApiKey: environment.OPENAI_API_KEY,
    temperature: 0.3
  });
  memory = new BufferMemory()
  chain = new ConversationChain({
    llm: this.AIModel,
    memory: this.memory
  });
  inputText: string = '';


  respArr: any[] = [];
  // Practice array
  // respArr: any[] = [
  //   { msg: 'What is your name?', response: 'I don\'t know my name' },
  //   { msg: 'What name would you like to have?', response: 'Walbrot Von Yonsol' },
  //   { msg: 'Another one', response: 'Yup, here it is' }
  // ];
  
  curPersonality: string = '';
  personalities = [
    'A Surfer Dude',
    'An Offensive, Insulting, Asshole',
    'Hyper and excited',
    'Sad',
    'Apoplectic with rage',
    'Surprised',

  ];


  submitForm() {
    console.log('Submitted: ', this.inputText);
    this.doLangchainStuff(this.inputText);
    this.inputText = '';
  }

    
  async doLangchainStuff(msg: any) {
    let msgForInput = msg;
    // this.curPersonality = this.personalities[1]

    if (this.curPersonality) {
      msgForInput += ` Respond as if you are ${this.curPersonality}`;
    }
    const resp = await this.chain.call({
      input: msgForInput,
    });
    console.log(typeof resp)
    console.log(resp);
    // this.respArr.push(resp.response);  // << Won't work
    const respItem = {
      msg,
      response: resp['response']
    }
    this.respArr.push(respItem);
    // Property 'response' comes from an index signature, so it must be accessed with ['response']
  }


  // Include ... while waiting for response

}

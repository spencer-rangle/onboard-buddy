import { Component, HostListener } from '@angular/core';
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains'
import { environment } from 'src/environments'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe-app';
  isShowPopup: boolean = false;
  curPersonality: string = '';
  personalities = [
    'A Surfer Dude',
    'An Offensive, Insulting, Asshole',
    'Hyper and excited',
    'Sad',
    'Apoplectic with rage',
    'Surprised',
    'Exhausted'
  ];
  inputText: string = '';
  respArr: any[] = [];
  // Practice array
  // respArr: any[] = [
  //   { msg: 'What is your name?', response: 'I don\'t know my name' },
  //   { msg: 'What name would you like to have?', response: 'Walbrot Von Yonsol' },
  //   { msg: 'Another one', response: 'Yup, here it is' }
  // ];

  AIModel = new OpenAI({
    openAIApiKey: environment.OPENAI_API_KEY,
    temperature: 0.3
  });
  memory = new BufferMemory()
  chain = new ConversationChain({
    llm: this.AIModel,
    memory: this.memory
  });

  submitForm() {
    console.log('Submitted: ', this.inputText);
    this.doLangchainStuff(this.inputText);
    this.inputText = '';
  }
    
  async doLangchainStuff(msg: any) {
    let msgForInput = msg;
    if (this.curPersonality) {
      msgForInput += ` Respond as if you are ${this.curPersonality}`;
    }
    const tempItem = {
      msg,
      response: '...'
    }
    this.respArr.push(tempItem);
    const resp = await this.chain.call({
      input: msgForInput,
    });
    console.log(resp);
    // this.respArr.push(resp.response);  // << Won't work
    // Property 'response' comes from an index signature, so it must be accessed with ['response']
    const respItem = {
      msg,
      response: resp['response']
    }
    this.respArr.pop();
    this.respArr.push(respItem);
  }

  togglePopup() {
    this.isShowPopup = !this.isShowPopup;
  }

  hidePopup() {
    this.isShowPopup = false;
  }

  handleMenuItemClick(option: string) {
    console.log('Selected option:', option);
    this.curPersonality = option;
    this.isShowPopup = false;
  }
}

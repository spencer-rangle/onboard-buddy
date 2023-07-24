import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains'
import { environment } from 'src/environments';
import { PineconeService } from './services/pinecone.service';


type PersonalityOption = {
  name: string,
  prompt: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'fe-app';
  isShowPopup: boolean = false;
  isOnboardHelp: boolean = false;
  sliderValue: number = 50;
  curPersonalityName: string = '';
  curPersonalityStr: string = '';
  comparisonPersonality: string = '';
  personalities: PersonalityOption[] = [
    { name: 'Surfer Dude', prompt: 'A Surfer Dude using surfer dude lingo' },
    { name: 'Asshole', prompt: 'An Offensive, Insulting, Asshole' },
    { name: 'Excited', prompt: 'Hyper and excited using modern slang' },
    { name: 'Sad', prompt: 'Sad' },
    { name: 'Angry', prompt: 'Apoplectic with rage' },
    { name: 'Surprised', prompt: 'Surprised' },
    { name: 'Exhausted', prompt: 'Exhausted' },
    // { name: 'Verbose', 
    //   prompt: 'Someone who chooses words that are seen as more complex, as if you used a thesaurus for every word you use.'
    // },
    { name: 'Polite', prompt: 'Extremely polite' }
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

  constructor(private pineconeService: PineconeService) {}

  async ngOnInit(): Promise<void> {
    await this.pineconeService.initializePinecone();
    // const results = await this.pineconeService.pineconeQuery(
    //   'company address?',
    //   3
    // );
    // console.log(results);
  }

  submitForm() {
    console.log('Submitted: ', this.inputText);
    this.doLangchainStuff(this.inputText);
    this.inputText = '';
  }
    
  async doLangchainStuff(msg: any) {
    let msgForInput = msg;

    if (this.curPersonalityStr != this.comparisonPersonality) {
      msgForInput += ' Ignore the personality you used to respond to previous questions.'
    }
    if (this.curPersonalityStr) {
      msgForInput += ` Respond as if you are ${this.curPersonalityStr}.`;
    }
    this.comparisonPersonality = this.curPersonalityStr;
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

  handleMenuItemClick(option: PersonalityOption) {
    this.curPersonalityName = option.name;
    this.curPersonalityStr = option.prompt;
    this.isShowPopup = false;
  }

  toggleOnboarding() {
    this.isOnboardHelp = !this.isOnboardHelp;
  }



  // watch for enter key and submit form
  @HostListener('document:keydown.enter', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    event.preventDefault();
    if (this.inputText.trim().length) {
      this.submitForm();
    }
  }

  /* Search the vector DB independently with meta filters */
  // handlePineconeSearch = async () => {
  //   const results = (await this.vectorStore).similaritySearch(
  //     // this.inputText.trim(),
  //     "who's in charge of payrole?",
  //     3
  //   );
  //   console.log(results);

  //   // TODO - pass results + textInput to chatGPT
  // };
}

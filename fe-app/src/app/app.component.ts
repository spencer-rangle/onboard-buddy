import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains'
import { environment } from 'src/environments';
import { PineconeService } from './services/pinecone.service';
import { docCategories, docContent } from './app-doc';

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
  isShowPopup: boolean = false;
  isOnboardHelp: boolean = false;
  sliderValue: number = 50;
  curPersonalityName: string = '';
  curPersonalityStr: string = '';
  comparisonPersonality: string = '';
  personalities: PersonalityOption[] = [
    { name: 'Patronizing', prompt: 'Explain it to me as if I were a 5 year-old' },
    { name: 'Surfer Dude', prompt: 'A Surfer Dude using surfer dude lingo' },
    { name: 'Asshole', prompt: 'An Offensive, Insulting, Asshole' },
    { name: 'Excited', prompt: 'Hyper and excited using modern slang' },
    { name: 'Sad', prompt: 'Sad' },
    { name: 'Angry', prompt: 'Apoplectic with rage' },
    { name: 'Surprised', prompt: 'Surprised' },
    { name: 'Exhausted', prompt: 'Exhausted' },
    // V Didn't get this to work as desired
    // { name: 'Verbose', 
    //   prompt: 'Someone who chooses words that are seen as more complex, as if you used a thesaurus for every word you use.'
    // },
    { name: 'Polite', prompt: 'Extremely polite' }
  ];
  inputText: string = '';
  respArr: any[] = [];

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

  // When onboarding content is on/true, for each question, 2 queries are done
  // The 1st query is an array of keywords to determine which string most likely relates to the original question
  // The 2nd will include the docContent string that supposedly relates most to the question
  async doLangchainStuff(msg: any) {
    let msgForInput = msg;
    const tempItem = {
      msg,
      response: '...'
    }
    this.respArr.push(tempItem);
    if (this.isOnboardHelp) {
      const midMsg = msg
        + ` Which of the below array of keywords most relates to the question above?
          Respond with only the number representing the array and nothing else.
          If you are not sure which relates most to the question above, then return '-1'`
        + docCategories;
      const midResp = await this.chain.call({
        input: midMsg,
      });
      if (midResp['response'] == '-1') {
        let allContent = '';
        docContent.forEach(item => allContent += item)
        msgForInput += allContent;
      } else {
        msgForInput += ' Here is the main material to look in: ';
        msgForInput += docContent[parseInt(midResp['response'])];
      }
    }
    if (this.curPersonalityStr != this.comparisonPersonality) {
      msgForInput += ' Ignore the personality you used to respond to previous questions.'
      this.comparisonPersonality = this.curPersonalityStr;
    }
    if (this.curPersonalityStr) {
      msgForInput += ` Respond as if you are ${this.curPersonalityStr}.`;
    }
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

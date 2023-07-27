import { Injectable } from '@angular/core';
import { OpenAI } from 'langchain/llms/openai';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeClient } from '@pinecone-database/pinecone';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class PineconeService {
  private pineconeIndex: any;
  private vectorStore: any;

  constructor() {}

  async initializePinecone() {
    console.log('Initializing Pinecone');
    const client = new PineconeClient();
    await client.init({
      apiKey: environment.PINECONE_API_KEY,
      environment: environment.PINECONE_ENVIRONMENT,
    });
    this.pineconeIndex = client.Index(environment.PINECONE_INDEX);

    this.vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings(),
      {
        pineconeIndex: this.pineconeIndex,
      }
    );
  }

  async pineconeQuery(query: string, count: number): Promise<any> {
    if (!this.vectorStore) {
      throw new Error(
        'Pinecone not initialized. Call initializePinecone() first.'
      );
    }

    return this.vectorStore.similaritySearch(query, count);
  }
}

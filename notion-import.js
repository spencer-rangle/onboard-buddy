import { PineconeClient } from "@pinecone-database/pinecone";
import { PineconeStore } from "langchain/vectorstores/pinecone";

import { OpenAI } from "langchain/llms/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { NotionLoader } from "langchain/document_loaders/fs/notion";
import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

import * as dotenv from "dotenv";
dotenv.config();

/**
 * Pinecone Init
 */
const client = new PineconeClient();
await client.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});
const pineconeIndex = client.Index(process.env.PINECONE_INDEX);

/**
 * Recursive Character Text Splitter
 */
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

/**
 * Notion Loader
 */
const importNotionDocs = async () => {
  console.info("*** running notion loader2");
  /** Provide the directory path of your notion folder */
  const directoryPath = "./rangle-notion-onboarding";
  const loader = new NotionLoader(directoryPath);
  /**
   * Notion Page Loader return shape for documents:
   * [Document:{pageContent: string, metadata: {source: string}}]
   */
  const docs = await loader.load();
  //   console.log({ docs });

  //   for (const doc of docs) {
  //     console.log(doc.pageContent);
  //   }

  const docOutput = await splitter.splitDocuments(docs);

  /** Index docOutput in Pinecone */
  await PineconeStore.fromDocuments(docOutput, new OpenAIEmbeddings(), {
    pineconeIndex,
  });
};
/* only needs to be run when new docs are added to the notion folder */
// importNotionDocs();

/* query pinecone store */
const vectorStore = await PineconeStore.fromExistingIndex(
  new OpenAIEmbeddings(),
  { pineconeIndex }
);

/* Search the vector DB independently with meta filters */
const results = await vectorStore.similaritySearch("who is in charge of payrole?", 3);
console.log(results);

// orginal document length = 180
// chunked length = 258

// chunk size 1000
// chunk overlap 200

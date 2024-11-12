// @ts-nocheck
import { createAnthropic } from '@ai-sdk/anthropic';
import { generateText, streamText, generateObject, streamObject } from 'ai';

const anthropicClient = createAnthropic({
  topK: 10,
  temperature: 0.7
});

const result = await generateText({
  model: anthropicClient('claude-3'),
  prompt: 'Hello'
});

const stream = await streamText({
  model: anthropicClient('claude-3'),
  prompt: 'Hello'
});

const objectResult = await generateObject({
  model: anthropicClient('claude-3'),
  prompt: 'Generate an object',
  schema: someSchema
});

const objectStream = await streamObject({
  model: anthropicClient('claude-3'),
  prompt: 'Stream an object',
  schema: someSchema
});

// Should not add topK
const resultNoTopK = await generateText({
  model: 'other-model',
  prompt: 'Hello'
});

const streamNoTopK = await streamText({
  model: 'other-model',
  prompt: 'Hello'
});

const objectResultNoTopK = await generateObject({
  model: 'other-model',
  prompt: 'Generate an object',
  schema: someSchema
});

const objectStreamNoTopK = await streamObject({
  model: 'other-model',
  prompt: 'Stream an object',
  schema: someSchema
});
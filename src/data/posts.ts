import { Post } from '../types';

export const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    content: `# Getting Started with React and TypeScript

TypeScript has become an essential tool in modern web development. Let's explore how to use it effectively with React...

## Why TypeScript?

TypeScript adds static typing to JavaScript, making your code more reliable and easier to maintain...

## Setting Up Your First Project

To get started with React and TypeScript, you'll need to...`,
    category: 'Development',
    date: '2024-03-10',
    excerpt: 'Learn how to leverage TypeScript in your React projects for better development experience.'
  },
  {
    id: '2',
    title: 'The Future of AI in Web Development',
    content: `# The Future of AI in Web Development

Artificial Intelligence is revolutionizing how we build and maintain web applications...

## Current AI Tools

From code completion to automated testing, AI tools are becoming increasingly sophisticated...

## What's Next?

The future holds even more promise for AI in web development...`,
    category: 'AI',
    date: '2024-03-09',
    excerpt: 'Explore how AI is shaping the future of web development and what it means for developers.'
  }
];
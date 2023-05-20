// はじめまして Nathan です。よろしくお願いします。
// 僕の趣味は日本語勉強です。何人かによるとこの趣味ちょっとつまらないそうです。
// でも、僕の毎日勉強することは本当に楽しいです。
// また、上手になるためにたくさん漢字を書くようにしています。
// 私のゴールはソフトを開発することです。ためこのにコーディング練習しています。
// しかし、上級のコーディングは難しいすぎそうです。でも、諦めないで頑張ります。

import React from 'react'
// add readings
export const introStoryArray = [
  {
    word: 'はじめまして',
    meaning: 'Nice to meet you',
    type: 'Set phrase',
  },
  {
    word: 'です',
    meaning: 'Be, is',
    type: 'Grammar',
  },
  {
    word: 'よろしくお願いします',
    meaning: 'Please treat me kindly',
    type: 'Set phrase',
  },
  {
    word: '僕',
    reading: '',
    meaning: 'Me, I (used by males)',
    type: 'Noun',
  },
  {
    word: 'の',
    meaning: 'Possessive, nominalizes verbs and adjectives',
    type: 'Grammar',
  },
  {
    word: '趣味',
    reading: '',
    meaning: 'Hobby, pastime',
    type: 'Noun',
  },
  {
    word: 'は',
    meaning: 'Topic marking particle',
    type: 'Grammar',
  },
  {
    word: '日本語',
    reading: '',
    meaning: 'Japanese language',
    type: 'Noun',
  },
  {
    word: '勉強',
    reading: '',
    meaning: 'Study',
    type: 'noun',
  },
  {
    word: '何人か',
    reading: '',
    meaning: 'Some people',
    type: 'Adverb',
  },
  {
    word: 'によると',
    meaning: 'According to',
    type: 'Grammar',
  },
  {
    word: 'この',
    meaning: 'This (must be attached to a noun)',
    type: 'Adjective',
  },
  {
    word: 'ちょっと',
    meaning: 'A little, somewhat',
    type: 'Adverb',
  },
  {
    word: 'つまらない',
    meaning: 'Boring',
    type: 'Adjective',
  },
  {
    word: 'そうです',
    meaning: 'Seemingly has the prior stated quality, people say that',
    type: 'Grammar',
  },
  { word: 'でも', meaning: 'But, however', type: 'Grammar' },
  {
    word: '毎日',
    reading: '',
    meaning: 'Everyday',
    type: 'Noun',
  },
  { word: 'する', meaning: 'To do', type: 'Verb' },
  {
    word: 'こと',
    meaning: 'Things, nominalizes verbs and adjectives',
    type: 'Noun',
  },
  {
    word: '本当に',
    reading: '',
    meaning: 'Really',
    type: 'Adverb',
  },
  {
    word: '楽しい',
    reading: '',
    meaning: 'Fun, enjoyable',
    type: 'Adjective',
  },
  { word: 'また', meaning: 'In addition, also', type: 'Noun' },
  {
    word: '上手',
    reading: '',
    meaning: 'Skillful, adept',
    type: 'Adjective',
  },
  { word: 'になる', meaning: 'To become', type: 'Grammar' },
  {
    word: 'ために',
    meaning: 'In order to do',
    type: 'Grammar',
  },
  {
    word: 'たくさん',
    meaning: 'A lot, many',
    type: 'Adverb',
  },
  {
    word: '漢字',
    reading: '',
    meaning: 'Chinese characters used in Japanese, Kanji',
    type: 'Noun',
  },
  {
    word: 'を',
    meaning: 'Shows the direct object of action',
    type: 'Grammar',
  },
  {
    word: '書く',
    reading: '',
    meaning: 'To write, to draw',
    type: 'Verb',
  },
  {
    word: 'ようにしています',
    meaning: 'To make a point of doing, to try to',
    type: 'Grammar',
  },
  {
    word: '私',
    reading: '',
    meaning: 'Me, I, (non gendered)',
    type: 'Noun',
  },
  { word: 'ゴール', meaning: 'Goal', type: 'Noun' },
  { word: 'ソフト', meaning: 'Software', type: 'Noun' },
  {
    word: '開発',
    reading: '',
    meaning: 'Development',
    type: 'Noun',
  },
  {
    word: 'コーディング',
    meaning: 'Coding',
    type: 'Noun',
  },
  {
    word: '練習',
    reading: '',
    meaning: 'Practice',
    type: 'Noun',
  },
  {
    word: 'しかし',
    meaning: 'However, but',
    type: 'Grammar',
  },
  {
    word: '上級',
    reading: '',
    meaning: 'Advanced level',
    type: 'Noun',
  },
  {
    word: '難しい',
    reading: '',
    meaning: 'Difficult, hard',
    type: 'Adjective',
  },
  {
    word: 'すぎる',
    meaning: 'Too much, to be excessive',
    type: 'Grammar',
  },
  {
    word: '諦める',
    reading: '',
    meaning: 'To give up',
    type: 'Verb',
  },
  {
    word: 'ないで',
    meaning: 'Without doing',
    type: 'Grammar',
  },
  {
    word: '頑張ります',
    reading: '',
    meaning: 'To persist, to keep going, to perservere',
    type: 'Verb',
  },
]

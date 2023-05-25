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
    id: 1,
  },
  {
    word: 'です',
    meaning: 'Be, is',
    type: 'Grammar',
    id: 2,
  },
  {
    word: 'よろしくお願いします',
    reading: 'よろしくおねがいします',
    meaning: 'Please treat me kindly',
    type: 'Set phrase',
    id: 3,
  },
  {
    word: '僕',
    reading: 'ぼく',
    meaning: 'Me, I (used by males)',
    type: 'Noun',
    id: 4,
  },
  {
    word: 'の',
    meaning: 'Possessive, nominalizes verbs and adjectives',
    type: 'Grammar',
    id: 5,
  },
  {
    word: '趣味',
    reading: 'しゅみ',
    meaning: 'Hobby, pastime',
    type: 'Noun',
    id: 6,
  },
  {
    word: 'は',
    meaning: 'Topic marking particle',
    type: 'Grammar',
    id: 7,
  },
  {
    word: '日本語',
    reading: 'にほんご',
    meaning: 'Japanese language',
    type: 'Noun',
    id: 8,
  },
  {
    word: '勉強',
    reading: 'べんきょう',
    meaning: 'Study',
    type: 'noun',
    id: 9,
  },
  {
    word: '何人か',
    reading: 'なんにんか',
    meaning: 'Some people',
    type: 'Adverb',
    id: 10,
  },
  {
    word: 'によると',
    meaning: 'According to',
    type: 'Grammar',
    id: 11,
  },
  {
    word: 'この',
    meaning: 'This (must be attached to a noun)',
    type: 'Adjective',
    id: 12,
  },
  {
    word: 'ちょっと',
    meaning: 'A little, somewhat',
    type: 'Adverb',
    id: 13,
  },
  {
    word: 'つまらない',
    meaning: 'Boring',
    type: 'Adjective',
    id: 14,
  },
  {
    word: 'そうです',
    meaning: 'Seemingly has the prior stated quality, people say that',
    type: 'Grammar',
    id: 15,
  },
  { word: 'でも', meaning: 'But, however', type: 'Grammar', id: 16 },
  {
    word: '毎日',
    reading: 'まいにち',
    meaning: 'Everyday',
    type: 'Noun',
    id: 17,
  },
  { word: 'する', meaning: 'To do', type: 'Verb', id: 18 },
  {
    word: 'こと',
    meaning: 'Things, nominalizes verbs and adjectives',
    type: 'Noun',
    id: 19,
  },
  {
    word: '本当に',
    reading: 'ほんとうに',
    meaning: 'Really',
    type: 'Adverb',
    id: 20,
  },
  {
    word: '楽しい',
    reading: 'たのしい',
    meaning: 'Fun, enjoyable',
    type: 'Adjective',
    id: 21,
  },
  { word: 'また', meaning: 'In addition, also', type: 'Noun', id: 22 },
  {
    word: '上手',
    reading: 'じょうず',
    meaning: 'Skillful, adept',
    type: 'Adjective',
    id: 23,
  },
  { word: 'になる', meaning: 'To become', type: 'Grammar', id: 24 },
  {
    word: 'ために',
    meaning: 'In order to do',
    type: 'Grammar',
    id: 25,
  },
  {
    word: 'たくさん',
    meaning: 'A lot, many',
    type: 'Adverb',
    id: 26,
  },
  {
    word: '漢字',
    reading: 'かんじ',
    meaning: 'Chinese characters used in Japanese, Kanji',
    type: 'Noun',
    id: 27,
  },
  {
    word: 'を',
    meaning: 'Shows the direct object of action',
    type: 'Grammar',
    id: 28,
  },
  {
    word: '書く',
    reading: 'かく',
    meaning: 'To write, to draw',
    type: 'Verb',
    id: 29,
  },
  {
    word: 'ようにしています',
    meaning: 'To make a point of doing, to try to',
    type: 'Grammar',
    id: 30,
  },
  {
    word: '私',
    reading: 'わたし',
    meaning: 'Me, I, (non gendered)',
    type: 'Noun',
    id: 31,
  },
  { word: 'ゴール', meaning: 'Goal', type: 'Noun', id: 32 },
  { word: 'ソフト', meaning: 'Software', type: 'Noun', id: 33 },
  {
    word: '開発',
    reading: 'かいはつ',
    meaning: 'Development',
    type: 'Noun',
    id: 34,
  },
  {
    word: 'コーディング',
    meaning: 'Coding',
    type: 'Noun',
    id: 35,
  },
  {
    word: '練習',
    reading: 'れんしゅう',
    meaning: 'Practice',
    type: 'Noun',
    id: 36,
  },
  {
    word: 'しかし',
    meaning: 'However, but',
    type: 'Grammar',
    id: 37,
  },
  {
    word: '上級',
    reading: 'じょうきゅう',
    meaning: 'Advanced level',
    type: 'Noun',
    id: 38,
  },
  {
    word: '難しい',
    reading: 'むずかしい',
    meaning: 'Difficult, hard',
    type: 'Adjective',
    id: 39,
  },
  {
    word: 'すぎる',
    meaning: 'Too much, to be excessive',
    type: 'Grammar',
    id: 40,
  },
  {
    word: '諦める',
    reading: 'あきらめる',
    meaning: 'To give up',
    type: 'Verb',
    id: 41,
  },
  {
    word: 'ないで',
    meaning: 'Without doing',
    type: 'Grammar',
    id: 42,
  },
  {
    word: '頑張ります',
    reading: 'がんばります',
    meaning: 'To persist, to keep going, to perservere',
    type: 'Verb',
    id: 43,
  },
]

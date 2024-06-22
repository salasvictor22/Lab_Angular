import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private words: string[] = ['angular', 'typescript', 'javascript', 'html', 'css'];

  constructor() { }

  getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }
}
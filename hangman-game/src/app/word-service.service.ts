import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private words = [
    'angular', 'typescript', 'component', 'service', 'dependency', 'injection', 'directive', 'module', 'template'
  ];

  getRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }
}
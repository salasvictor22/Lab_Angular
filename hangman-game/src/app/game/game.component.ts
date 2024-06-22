import { Component, OnInit } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  word: string = '';
  displayedWord: string[] = [];
  guessedLetters: Set<string> = new Set();
  remainingAttempts: number = 6;
  gameOver: boolean = false;
  gameWon: boolean = false;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.word = this.wordService.getRandomWord();
    this.displayedWord = Array(this.word.length).fill('_');
    this.guessedLetters.clear();
    this.remainingAttempts = 6;
    this.gameOver = false;
    this.gameWon = false;
  }

  guessLetter(letter: string): void {
    if (this.guessedLetters.has(letter) || this.gameOver) {
      return;
    }

    this.guessedLetters.add(letter);

    if (this.word.includes(letter)) {
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === letter) {
          this.displayedWord[i] = letter;
        }
      }
      this.checkWin();
    } else {
      this.remainingAttempts--;
      if (this.remainingAttempts === 0) {
        this.gameOver = true;
      }
    }
  }

  checkWin(): void {
    if (!this.displayedWord.includes('_')) {
      this.gameWon = true;
      this.gameOver = true;
    }
  }
}
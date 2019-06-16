import { Injectable } from '@angular/core';
import Game from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  newGame(size, character) {
    return new Game(
      size,
      character
    );
  }
}

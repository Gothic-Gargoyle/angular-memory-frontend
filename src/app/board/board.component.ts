import {Component, Input, OnInit} from '@angular/core';
import Game from '../game';
import card from '../card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() addScore;
  @Input() game: Game;
  opened = [];

  constructor() {

  }

  ngOnInit() {
  }

  onClick(x, y){
    this.turnCard(x, y);
  }

  turnCard(x, y) {
    if (this.opened.length >= 2) {
      this.opened.forEach(([x, y]) => {
        this.game.cards[y][x].isHidden = true;
      });

      this.opened = [];
    }

    if (this.opened.length == 1 && this.opened[0][0] == x && this.opened[0][1] == y) {
      return;
    }

    this.opened.push([x, y]);
    this.game.cards[y][x].isHidden = false;

    if (this.opened.length == 2) {
      const isEquals = this.check();

      if (isEquals) {
        this.isEndGame();
        this.opened = [];

      }
    }
  }

  check(){
    const [x0, y0] = this.opened[0];
    const [x1, y1] = this.opened[1];

    if(this.game.cards[y0][x0].letter == this.game.cards[y1][x1].letter){
      this.game.matched.push(this.opened);
      this.game.cards[y0][x0].isFound = true;
      this.game.cards[y1][x1].isFound = true;
      return true;
    }

    return false;
  }

  isEndGame(){
    if(this.game.matched.length >= this.game.settings.size){
      this.game.stopGame();
      this.addScore(this.game.time);
    }
  }

}

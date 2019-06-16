import Card from './card';
import Settings from './settings';

export default class Game {

  cards = [];
  matched = [];
  settings: Settings;
  startTime = Game.getSeconds();
  timer;
  time: number = 0;

  constructor(size, character) {
    this.settings = new Settings(
      size,
      character
    );

    this.buildBoard();
    this.timer = setInterval(() => {
      this.time++;
    }, 1000);
  }

  buildBoard() {
    const getLetter = Game.nextLetter(this.settings.size);

    for (let i = 0; i < this.settings.size; i++) {
      const row = [];

      for (let j = 0; j < this.settings.size; j++) {
        row.push(new Card(getLetter(), this.settings.character));
      }

      this.cards.push(row);
    }
  }

  stopGame() {
    clearInterval(this.timer);
    this.timer = null;
  }

  static nextLetter(size) {
    let letterArray = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ".substring(0,size*size).split('');
    let idx = 0;
    letterArray= Game.shuffle(letterArray);
    return function () {
      let letter = letterArray[idx++];
      return letter;
    };
  }

  static shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  static getSeconds(){
    const time = new Date().getTime()/1000;
    return Math.round(time);
  }

}


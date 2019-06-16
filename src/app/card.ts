export default class Card {
  letter: string;
  isHidden: boolean = true;
  isFound : boolean = false;
  character : string;

  constructor(letter, character) {
    this.letter = letter;
    this.character = character;
  }
}

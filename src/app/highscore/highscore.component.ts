import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {

  @Input() scores;

  constructor() { }

  ngOnInit() {
  }

  sortTop(list) {
    return list.sort((a, b) => (
      a.total - b.total
    ));
  }


}

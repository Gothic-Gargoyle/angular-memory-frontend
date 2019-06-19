import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {GameService} from './game.service';
import Game from './game';
import Settings from './settings';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'memory-game';

  settings: Settings = new Settings();
  game: Game;
  scores = [];

  constructor(
    private router: Router,
    private gameService : GameService,
    private authenticationService: AuthenticationService
  ) {
    this.gameService = gameService;
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.newGame();
  }

  ngOnInit(): void {
  }

  newGame() {
    this.game = this.gameService.newGame(
      this.settings.size,
      this.settings.character
    );
  }

  addScore(score) {
    this.scores.push({
      name: 'me',
      total: score,
    })
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

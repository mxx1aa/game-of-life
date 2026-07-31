import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { GameService } from '../game';

@Component({
  selector: 'game-of-life',
  imports: [NgClass],
  templateUrl: './game-of-life.html',
  styleUrl: './game-of-life.scss',
})
export class GameOfLife {
  constructor(protected gameService: GameService) {}
}

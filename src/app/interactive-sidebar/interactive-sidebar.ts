import { Component } from '@angular/core';
import { GameService } from '../game';

@Component({
  selector: 'interactive-sidebar',
  imports: [],
  templateUrl: './interactive-sidebar.html',
  styleUrl: './interactive-sidebar.scss',
})
export class InteractiveSidebar {
  constructor(protected gameService: GameService) {}
}

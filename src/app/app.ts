import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameOfLife } from './game-of-life/game-of-life';
import { InteractiveSidebar } from './interactive-sidebar/interactive-sidebar';

@Component({
  selector: 'root',
  imports: [RouterOutlet, GameOfLife, InteractiveSidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('game-of-life');
}

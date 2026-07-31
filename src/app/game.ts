import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GameService {
  rows = signal<boolean[][]>(Array.from({ length: 40 }, () => Array(73).fill(false)));

  toggleCell(row: number, col: number) {
    this.rows.update((grid) => {
      const next = grid.map((r) => [...r]);
      next[row][col] = !next[row][col];
      return next;
    });
  }

  hasAliveCells(): boolean {
    return this.rows().some((row) => row.some((cell) => cell));
  }

  clear() {
    this.rows.set(Array.from({ length: 40 }, () => Array(73).fill(false)));
  }

  isRunning = signal(false);
  gameLoopInterval: any;

  toggleGameState() {
    this.isRunning.update((running) => !running);

    if (this.isRunning()) {
      this.startGameLoop();
    } else {
      this.stopGameLoop();
    }
  }

  startGameLoop() {
    this.gameLoopInterval = setInterval(() => {
      this.nextGeneration();
    }, 100);
  }

  stopGameLoop() {
    clearInterval(this.gameLoopInterval);
  }
  countNeighbors(row: number, col: number, grid: boolean[][]): number {
    let count = 0;
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (r === row && c === col) continue;
        if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
          if (grid[r][c]) count++;
        }
      }
    }
    return count;
  }

  nextGeneration() {
    this.rows.update((currentGrid) => {
      const nextGrid = currentGrid.map((row) => [...row]);

      for (let r = 0; r < currentGrid.length; r++) {
        for (let c = 0; c < currentGrid[r].length; c++) {
          const neighbors = this.countNeighbors(r, c, currentGrid);
          const isAlive = currentGrid[r][c];

          if (isAlive && (neighbors < 2 || neighbors > 3)) {
            nextGrid[r][c] = false;
          } else if (!isAlive && neighbors === 3) {
            nextGrid[r][c] = true;
          }
        }
      }

      return nextGrid;
    });
  }
}

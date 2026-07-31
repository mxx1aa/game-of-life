import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfLife } from './game-of-life';

describe('GameOfLife', () => {
  let component: GameOfLife;
  let fixture: ComponentFixture<GameOfLife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOfLife],
    }).compileComponents();

    fixture = TestBed.createComponent(GameOfLife);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

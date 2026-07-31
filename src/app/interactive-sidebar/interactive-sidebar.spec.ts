import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveSidebar } from './interactive-sidebar';

describe('InteractiveSidebar', () => {
  let component: InteractiveSidebar;
  let fixture: ComponentFixture<InteractiveSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(InteractiveSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

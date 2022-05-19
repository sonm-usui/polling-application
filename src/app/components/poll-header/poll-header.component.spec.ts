import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollHeaderComponent } from './poll-header.component';

describe('PollHeaderComponent', () => {
  let component: PollHeaderComponent;
  let fixture: ComponentFixture<PollHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

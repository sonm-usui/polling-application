import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollFooterComponent } from './poll-footer.component';

describe('PollFooterComponent', () => {
  let component: PollFooterComponent;
  let fixture: ComponentFixture<PollFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

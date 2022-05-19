import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingHomepageComponent } from './polling-homepage.component';

describe('PollingHomepageComponent', () => {
  let component: PollingHomepageComponent;
  let fixture: ComponentFixture<PollingHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollingHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollingHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

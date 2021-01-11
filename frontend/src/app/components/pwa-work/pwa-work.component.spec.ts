import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaWorkComponent } from './pwa-work.component';

describe('PwaWorkComponent', () => {
  let component: PwaWorkComponent;
  let fixture: ComponentFixture<PwaWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwaWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

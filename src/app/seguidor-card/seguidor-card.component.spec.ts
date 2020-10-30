import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguidorCardComponent } from './seguidor-card.component';

describe('SeguidorCardComponent', () => {
  let component: SeguidorCardComponent;
  let fixture: ComponentFixture<SeguidorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguidorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguidorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

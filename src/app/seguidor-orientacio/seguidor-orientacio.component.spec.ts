import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguidorOrientacioComponent } from './seguidor-orientacio.component';

describe('SeguidorOrientacioComponent', () => {
  let component: SeguidorOrientacioComponent;
  let fixture: ComponentFixture<SeguidorOrientacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguidorOrientacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguidorOrientacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

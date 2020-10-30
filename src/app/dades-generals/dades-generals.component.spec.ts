import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadesGeneralsComponent } from './dades-generals.component';

describe('DadesGeneralsComponent', () => {
  let component: DadesGeneralsComponent;
  let fixture: ComponentFixture<DadesGeneralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadesGeneralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadesGeneralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccioComponentComponent } from './produccio-component.component';

describe('ProduccioComponentComponent', () => {
  let component: ProduccioComponentComponent;
  let fixture: ComponentFixture<ProduccioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduccioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduccioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

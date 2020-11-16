import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracioPlacaComponent } from './configuracio-placa.component';

describe('ConfiguracioPlacaComponent', () => {
  let component: ConfiguracioPlacaComponent;
  let fixture: ComponentFixture<ConfiguracioPlacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracioPlacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracioPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

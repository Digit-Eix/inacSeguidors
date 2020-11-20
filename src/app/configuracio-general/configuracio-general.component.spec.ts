import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracioGeneralComponent } from './configuracio-general.component';

describe('ConfiguracioGeneralComponent', () => {
  let component: ConfiguracioGeneralComponent;
  let fixture: ComponentFixture<ConfiguracioGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracioGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracioGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

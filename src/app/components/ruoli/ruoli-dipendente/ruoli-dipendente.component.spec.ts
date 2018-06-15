import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuoliDipendenteComponent } from './ruoli-dipendente.component';

describe('RuoliDipendenteComponent', () => {
  let component: RuoliDipendenteComponent;
  let fixture: ComponentFixture<RuoliDipendenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuoliDipendenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuoliDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

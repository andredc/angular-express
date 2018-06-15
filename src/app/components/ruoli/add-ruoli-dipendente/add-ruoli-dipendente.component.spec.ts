import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRuoliDipendenteComponent } from './add-ruoli-dipendente.component';

describe('AddRuoliDipendenteComponent', () => {
  let component: AddRuoliDipendenteComponent;
  let fixture: ComponentFixture<AddRuoliDipendenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRuoliDipendenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRuoliDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

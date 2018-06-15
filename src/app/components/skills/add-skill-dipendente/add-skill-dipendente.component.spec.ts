import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillDipendenteComponent } from './add-skill-dipendente.component';

describe('AddSkillDipendenteComponent', () => {
  let component: AddSkillDipendenteComponent;
  let fixture: ComponentFixture<AddSkillDipendenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkillDipendenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

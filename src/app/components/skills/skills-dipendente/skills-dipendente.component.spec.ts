import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDipendenteComponent } from './skills-dipendente.component';

describe('SkillsDipendenteComponent', () => {
  let component: SkillsDipendenteComponent;
  let fixture: ComponentFixture<SkillsDipendenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsDipendenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

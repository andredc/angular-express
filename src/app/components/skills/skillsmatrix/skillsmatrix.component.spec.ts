import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsmatrixComponent } from './skillsmatrix.component';

describe('SkillsmatrixComponent', () => {
  let component: SkillsmatrixComponent;
  let fixture: ComponentFixture<SkillsmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

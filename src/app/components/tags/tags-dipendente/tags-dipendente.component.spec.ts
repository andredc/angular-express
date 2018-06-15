import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsDipendenteComponent } from './tags-dipendente.component';

describe('TagsDipendenteComponent', () => {
  let component: TagsDipendenteComponent;
  let fixture: ComponentFixture<TagsDipendenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsDipendenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

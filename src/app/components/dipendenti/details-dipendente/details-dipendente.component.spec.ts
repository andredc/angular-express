import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDipendenteComponent } from './details-dipendente.component';

describe('DetailsDipendenteComponent', () => {
  let component: DetailsDipendenteComponent;
  let fixture: ComponentFixture<DetailsDipendenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDipendenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

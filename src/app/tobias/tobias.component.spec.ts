import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobiasComponent } from './tobias.component';

describe('TobiasComponent', () => {
  let component: TobiasComponent;
  let fixture: ComponentFixture<TobiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

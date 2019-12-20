import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiamComponent } from './liam.component';

describe('LiamComponent', () => {
  let component: LiamComponent;
  let fixture: ComponentFixture<LiamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

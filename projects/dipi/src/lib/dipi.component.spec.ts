import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DipiComponent } from './dipi.component';

describe('DipiComponent', () => {
  let component: DipiComponent;
  let fixture: ComponentFixture<DipiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DipiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DipiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

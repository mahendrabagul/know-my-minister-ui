import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterDetailComponent } from './minister-detail.component';

describe('MinisterDetailComponent', () => {
  let component: MinisterDetailComponent;
  let fixture: ComponentFixture<MinisterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

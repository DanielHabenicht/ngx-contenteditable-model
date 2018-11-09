import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxContenteditableModelComponent } from './ngx-contenteditable-model.component';

describe('NgxContenteditableModelComponent', () => {
  let component: NgxContenteditableModelComponent;
  let fixture: ComponentFixture<NgxContenteditableModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxContenteditableModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxContenteditableModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

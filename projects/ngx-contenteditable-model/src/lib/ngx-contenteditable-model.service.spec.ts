import { TestBed } from '@angular/core/testing';

import { NgxContenteditableModelService } from './ngx-contenteditable-model.service';

describe('NgxContenteditableModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxContenteditableModelService = TestBed.get(NgxContenteditableModelService);
    expect(service).toBeTruthy();
  });
});

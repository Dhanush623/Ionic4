import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPagePage } from './demo-page.page';

describe('DemoPagePage', () => {
  let component: DemoPagePage;
  let fixture: ComponentFixture<DemoPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewShellyComponent } from './NewShelly.component';

describe('NewShellyComponent', () => {
  let component: NewShellyComponent;
  let fixture: ComponentFixture<NewShellyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShellyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShellyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShellyListComponent } from './shelly-list.component';

describe('ShellyListComponent', () => {
  let component: ShellyListComponent;
  let fixture: ComponentFixture<ShellyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

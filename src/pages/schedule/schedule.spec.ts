import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SchedulePage } from './schedule';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('MyApp Component', () => {
  let fixture;
  let component;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePage],
      imports: [
        IonicModule.forRoot(SchedulePage)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
      fixture.destroy();
      component = null;
      de = null;
      el = null;
  });

  it('should be created', () => {
    expect(component instanceof SchedulePage).toBe(true);
  });

  it('should have fab', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('ion-fab'));
    el = de.nativeElement;
    expect(el).toBeTruthy();
  });

  it('should have segment', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('ion-segment'));
    el = de.nativeElement;
    expect(el).toBeTruthy();
  });

  it('should return false for different dates', () => {
    let first_date = new Date();
    let second_date = 'Oct 10 2017';
    let val = component.compare_dates(first_date, second_date);
    expect(val).toBe(false);
  });

});

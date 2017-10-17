import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CalendarPage } from './calendar';
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
      declarations: [CalendarPage],
      imports: [
        IonicModule.forRoot(CalendarPage)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
      fixture.destroy();
      component = null;
      de = null;
      el = null;
  });

  it('should be created', () => {
    expect(component instanceof CalendarPage).toBe(true);
  });

});

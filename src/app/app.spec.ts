import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;
let de: DebugElement;
let el: HTMLElement;

describe('Component: Root Component', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [MyApp],

            providers: [
              StatusBar,
              SplashScreen
            ],

            imports: [
                IonicModule.forRoot(MyApp)
            ]

        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(MyApp);
        comp    = fixture.componentInstance;

    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });

    it('is created', () => {
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    });

    it('displays the product page to the user', () => {
        expect(comp['rootPage']).toBe(HomePage);
    });

    it('should have a menu', () => {
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('ion-menu'));
      el = de.nativeElement;
      expect(el).toBeTruthy();
    });
});

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from '../../app/app.component';
import { HomePage } from './home';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;
let de: DebugElement;
let el: HTMLElement;

describe('Component: Root Component', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [MyApp, HomePage],

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
});

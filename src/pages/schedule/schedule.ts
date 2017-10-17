import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { JobsProvider } from '../../providers/jobs/jobs';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  date: Date;
  data;
  compare_date;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mCtrl: ModalController, public jobService: JobsProvider) {
    this.date = new Date();
    this.compare_date = this.date.toDateString();
    this.data = this.jobService.worker;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }
  openCal(){
    let modal = this.mCtrl.create(CalendarPage);
    modal.onDidDismiss(data => {
      this.date = data;
      this.compare_date = this.date.toDateString();
    });
    modal.present();
  }

  compare_dates(today, data){
    let first_date = new Date(today);
    let second_date = new Date(data);
    if(first_date.getTime() === second_date.getTime())
      return true;
    else
      return false;
  }
}

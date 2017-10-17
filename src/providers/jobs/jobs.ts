import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JobsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JobsProvider {
  worker =
  [

    {"task": "Paint",
      "fees": "$40",
      "location": "New York",
      "status": "remaining",
      "date": "Oct 16 2017"
    },

    {"task": "Car Wash",
      "fees": "$30",
      "location": "New York",
      "status": "remaining",
      "date": "Oct 20 2017"
    },

    {"task": "Cleaning",
      "fees": "$40",
      "location": "New York",
      "status": "remaining",
      "date": "Oct 19 2017"
    },

    {"task": "Paint",
      "fees": "$70",
      "location": "New York",
      "status": "complete",
      "date": "Oct 15 2017"
    },

    {"task": "Car Wash",
      "fees": "$60",
      "location": "New York",
      "status": "request",
      "date": "Oct 25 2017"
    },

    {"task": "Decorate",
      "fees": "$40",
      "location": "New York",
      "status": "request",
      "date": "Oct 22 2017"
    }
  ];
  constructor(public http: Http) {
    console.log('Hello JobsProvider Provider');
  }

}

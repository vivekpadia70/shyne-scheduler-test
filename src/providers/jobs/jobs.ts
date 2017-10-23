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

    {"title": "Paint",
      "fees": "$40",
      "location": "New York",
      "status": "remaining",
      "startTime": "Sun Oct 01 2017 05:30:00 GMT+0530 (IST)",
      "endTime": "Mon Oct 02 2017 05:30:00 GMT+0530 (IST)"
    },

    {"title": "Car Wash",
      "fees": "$30",
      "location": "New York",
      "status": "remaining",
      "startTime": "Sun Nov 05 2017 23:21:00 GMT+0530 (IST)",
      "endTime": "Mon Nov 06 2017 01:22:00 GMT+0530 (IST)"
    },

    {"title": "Cleaning",
      "fees": "$40",
      "location": "New York",
      "status": "remaining",
      "startTime": "Wed Nov 22 2017 05:30:00 GMT+0530 (IST)",
      "endTime": "Thu Nov 23 2017 05:30:00 GMT+0530 (IST)"
    },

    {"title": "Paint",
      "fees": "$70",
      "location": "New York",
      "status": "complete",
      "startTime": "Thu Nov 16 2017 20:23:00 GMT+0530 (IST)",
      "endTime": "Fri Nov 17 2017 22:32:00 GMT+0530 (IST)"
    },

    {"title": "Car Wash",
      "fees": "$60",
      "location": "New York",
      "status": "request",
      "startTime": "Fri Oct 13 2017 05:30:00 GMT+0530 (IST)",
      "endTime": "Sat Oct 14 2017 05:30:00 GMT+0530 (IST)"
    },

    {"title": "Decorate",
      "fees": "$40",
      "location": "New York",
      "status": "request",
      "startTime": "Thu Oct 05 2017 21:25:00 GMT+0530 (IST)",
      "endTime": "Fri Oct 06 2017 23:36:00 GMT+0530 (IST)"
    }
  ];
  constructor(public http: Http) {
    console.log('Hello JobsProvider Provider');
  }

}

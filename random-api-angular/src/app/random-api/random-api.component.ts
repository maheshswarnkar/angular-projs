import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random-api',
  templateUrl: './random-api.component.html',
  styleUrls: ['./random-api.component.css']
})
export class RandomApiComponent {

  userName: string = "";
  responseData: any = "";
  logsData: any = "";
  // randomApi: any[] = [];
  test: any[] = [];

  constructor(private http: HttpClient) {

  }

  getLogsResponseData(){
    let logsData = this.http.get('http://localhost:7777/api/logs');

    logsData.subscribe(
      (logsData) => {
        this.logsData = logsData;
        console.log("Printing logsData " + this.logsData);
      });


    this.logsData;

    console.log("I am outside of logsData..");
  }


  getRandomApiResponseData() {
    // let responseData = this.http.get('https://randomuser.me/api/');
    let responseData = this.http.get('http://localhost:7777/randomApi');

    responseData.subscribe(
      (responseData) => {
        this.responseData = responseData;
        console.log("Printing responseData " + this.responseData);
      });

    let headers: string[] = [];

    this.responseData;

    console.log("I am outside of if()..");

    if (this.responseData) {
      console.log("I am inside of if()..");
      this.responseData.forEach((value: string) => {

        Object.keys(value).forEach((key) => {

          console.log("key : " + key);
          console.log("value: " + value);

          if (!headers.find((header) => header == key)) {
            headers.push(key)
          }
        })
      })
    }

  }
}

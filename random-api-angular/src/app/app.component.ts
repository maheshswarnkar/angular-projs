import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-api-angular';
  inputText: string = 'InputValue';
  userName: string = "";
  response: any = "";
  // randomApi: any[] = [];
  test: any[] = [];

  constructor(private http: HttpClient) {
    console.log("Printing to console and called from TestService !!..");
  }

  ngOnInit() {
    console.log("Print from ngOnInit");
  }


}

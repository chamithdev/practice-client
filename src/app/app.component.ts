import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {

  }
  title = "Dating App";
  users: any;
 
  
  ngOnInit() {
    
    this.http.get("https://localhost:44385/api/users").subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error)
    })
  }
}

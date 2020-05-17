import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bodysky-testapp';
 public instructors: any = []
 constructor(private http: HttpClient) {
  
 }

 getAllInstructors(){
  const url ='https://api.bodysky.com/search/top'
  this.http.get(url).subscribe((res)=>{
    this.instructors = res
    console.log(this.instructors)
  })
}
 ngOnInit() {
   this.getAllInstructors()
 }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public instructors:any = []
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


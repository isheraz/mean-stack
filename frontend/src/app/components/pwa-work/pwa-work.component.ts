import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pwa-work',
  templateUrl: './pwa-work.component.html',
  styleUrls: ['./pwa-work.component.scss']
})
export class PwaWorkComponent implements OnInit {

  data: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.data = res;
    });
  }

}

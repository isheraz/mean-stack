import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      username: 'jhon'
    },
    {id: 2, text: 'Integer rhoncus interdum nulla eget tempor. Mauris vitae magna ac erat venenatis lacinia a at risus.', username: 'Bob'},
    {id: 3, text: 'In vitae porta elit. Praesent ac risus ut mi efficitur tempus ac placerat orci.', username: 'Lily'},
    {id: 4, text: 'Aliquam ut arcu at sem sollicitudin accumsan dignissim eu massa.', username: 'jhon'},
    {id: 5, text: 'In laoreet iaculis sem. Nullam id lobortis nisi.', username: 'Bob'},
    {id: 6, text: 'Suspendisse potenti.', username: 'Lily'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { EventViewComponent } from './event-view/event-view.component';
import { EventFormComponent } from './event-form/event-form.component';
import { DeletePopupComponent } from '../popups/delete-popup/delete-popup.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events = [];
  displayedColumns = ['id', 'name', 'venue', 'desc', 'date', 'Actions'];

  constructor(private http: HttpClient, private toast: ToastrService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.onGetEvents();
  }

  onAddEvent() {
    this.dialog.open(EventFormComponent, {
      maxWidth: '700px',
      width: '600px'
    }).afterClosed().subscribe(res => {
      if (res) {
        this.onGetEvents();
      }
    });
  }

  onViewEventHandler(element: any) {
    const dialog = this.dialog.open(EventViewComponent, {
      maxWidth: '800px',
      data: { name: element.name, venue: element.venue, desc: element.desc, date: element.date }
    });

  }

  onGetEvents() {
    this.http.get('http://127.0.0.1:3000/api/event/getAllEvents').subscribe((data: any) => {
      this.events = data.events;
    });
  }

  onUpdateEventHandler(element: any) {
    if (element) {
      this.dialog.open(EventFormComponent, {
        maxWidth: '700px',
        width: '600px',
        data: { id: element.id, name: element.name, venue: element.venue, desc: element.desc, date: element.date }
      }).afterClosed().subscribe(res => {
        if (res) {
          this.onGetEvents();
        }
      });
    }

  }

  onDeleteHandler(element: any) {
    this.dialog.open(DeletePopupComponent, {
      maxWidth: '400px',
      width: '500px',
      data: { id: element.id, name: element.name, openFor: 'event' }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.http.delete(`http://localhost:3000/api/event/deleteEvent/${element.id}`).subscribe((res: any) => {
          this.toast.success('Event', res.message);
        });
        this.onGetEvents();
      }
    });
  }

}

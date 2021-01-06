import { Component, OnInit,Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
interface ModelData {
  id:number;
  name:string;
  venue:string;
  desc:string;
  date:string;
}

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  public id:number = 0;
  public eventName:string='';
  venue:string = '';
  desc:string = '';
  date:string = '';
  error:string = '';
  constructor(private http:HttpClient,private toast:ToastrService,private dialogRef:MatDialogRef<EventFormComponent>,@Inject(MAT_DIALOG_DATA) public data: ModelData ) {
   if(this.data){
      this.id = this.data.id;
      this.eventName = this.data.name;
      this.venue = this.data.venue;
      this.desc = this.data.desc;
      this.date = this.data.date;
    }
   }

  ngOnInit(): void {
  }
  onUpdateHandler(event:any){
    const {name,value} = event.target;
    switch(name){
      case "name":
        this.eventName = value;
        break;
      case "venue":
        this.venue = value;
        break;
      case "desc":
        this.desc = value;
        break;
      default:
        this.date = value

    }

  }
  submitHandler(){
    if(!this.eventName || !this.venue || !this.desc || !this.date){
      this.error = 'Please Fill All Fields First';
      return;
    }
    let reqData = {
      name:this.eventName,
      venue:this.venue,
      desc:this.desc,
      date:this.date
    }
    if(this.id){
      this.http.put(`http://localhost:3000/api/event/updateEvent/${this.id}`,reqData).subscribe(res=>{
        this.toast.success('Event','Event Edited Successfully');
        this.dialogRef.close(1);
      })
    }
    else this.http.post('http://localhost:3000/api/event/createEvent',reqData).subscribe(res=>{
      this.toast.success('Event','Created Successfully');
      this.dialogRef.close(1);
    })
  }

}

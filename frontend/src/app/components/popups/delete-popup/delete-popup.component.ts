import { Component, OnInit,Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
interface ModelData {
  id:number;
  name:string;
}
@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent implements OnInit {

  constructor(private http:HttpClient,private toast:ToastrService,@Inject(MAT_DIALOG_DATA) public data: ModelData,private dialogRef:MatDialogRef<DeletePopupComponent> ) { }

  ngOnInit(): void {
  }
  onDeleteHandler(){
     this.http.delete(`http://localhost:3000/api/event/deleteEvent/${this.data.id}`).subscribe((res:any) =>{
      this.toast.success('Event',res.message);
      this.dialogRef.close(1);
    })
  }
}

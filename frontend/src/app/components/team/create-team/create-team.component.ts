import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeamService } from '../../../services/TeamService/team.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../services/UserService/user.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  teamForm: any;
  userList: any;
  selectedUsers: any;

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private fb: FormBuilder,
    private toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateTeamComponent>) {
  }

  ngOnInit(): void {
    this.userList = this.getUserList();
    if (this.data.openAs === 'Update') {
      this.updateForm(this.data.elem);
    } else {
      this.createForm();
    }
  }

  createForm(): void {
    this.teamForm = this.fb.group({
      id: [, []],
      name: ['', [Validators.required]],
      members: [[], []]
    });
  }

  saveTeam(): void {
    const values = this.teamForm.value;
    if (values.id) {
      const id = values.id;
      delete values.id;
      this.teamService.update(id, values).subscribe((res: any) => {
        if (res.data) {
          this.teamForm.reset();
          this.toaster.success('Data is updated', 'Success');
        }
      });
    } else {
      this.teamService.createTeam(this.teamForm.value).subscribe((res: any) => {
        if (res.data) {
          this.toaster.success('Team is created', 'Success');
        }
      });
    }
    this.dialogRef.close('close');
  }

  updateForm(elem: any): void {
    let users = [];
    if (elem.members) {
      users = elem.members.map((one: any) => one.name);
    }
    this.teamForm = this.fb.group({
      id: [elem.id, []],
      name: [elem.name, []],
      members: [users, []]
    });
    this.userList = elem.Members;
  }

  clearForm(): void {
    this.teamForm.get('name').reset();
    this.teamForm.get('members').reset();
  }

  getUserList(): void {
    this.userService.userList().subscribe((res: any) => {
      if (res.data) {
        this.userList = res.data.map((one: any) => ({ id: one.id, name: one.name, email: one.email }));
      }
    });
  }
}

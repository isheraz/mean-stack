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
  selectedUsers: any[] = [];
  filteredUsers: any[] = [];


  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private fb: FormBuilder,
    private toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateTeamComponent>) {
  }

  ngOnInit(): void {
    this.createForm();
    this.userService.userList().subscribe((res: any) => {
      if (res.data) {
        this.userList = res.data.map((one: any) => ({ id: one.id, name: one.name, email: one.email }));
        if (this.data.openAs === 'Update') {
          this.updateForm(this.data.elem);
        } else {
          this.filteredUsers = this.userList;
        }
      }
    });
  }

  createForm(): void {
    this.teamForm = this.fb.group({
      id: [, []],
      name: ['', [Validators.required]],
      users: [[], []]
    });
  }

  saveTeam(): void {
    const usrs = this.selectedUsers.length ? this.selectedUsers.map((one: any) => one.id) : [];
    this.teamForm.get('users').setValue(usrs);
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
      const body = this.teamForm.value;
      delete body.id;
      this.teamService.createTeam(body).subscribe((res: any) => {
        if (res.data) {
          this.toaster.success('Team is created', 'Success');
        }
      });
    }
    this.dialogRef.close('close');
  }

  updateForm(elem: any): void {
    this.teamForm.get('id').setValue(elem.id);
    this.teamForm.get('name').setValue(elem.name);
    this.selectedUsers = elem.Users;
    this.filterLists();
  }

  clearForm(): void {
    this.teamForm.get('name').reset();
    this.teamForm.get('users').reset();
    this.selectedUsers = [];
    this.filterLists();
  }

  updateTeam() {
    this.selectedUsers = this.teamForm.get('users').value.length ? [...this.selectedUsers, ...this.teamForm.get('users').value] : this.selectedUsers;
    this.filterLists();
  }

  filterLists() {
    this.teamForm.get('users').reset();
    this.filteredUsers = [];
    this.userList.forEach((usr: any) => {
      const user = this.selectedUsers.find((one: any) => (one.id === usr.id));
      if (!user) {
        this.filteredUsers.push(usr);
      }
    });
  }

  removeUser(id: any) {
    this.selectedUsers = this.selectedUsers.filter((one: any) => one.id !== id);
    this.filterLists();
  }
}

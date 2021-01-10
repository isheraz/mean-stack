import {Component, OnInit, ViewChild} from '@angular/core';
import {TeamService} from '../../services/TeamService/team.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {CreateTeamComponent} from './create-team/create-team.component';
import {ViewTeamComponent} from './view-team/view-team.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  dataSource: any = [
    {srNo: '1', name: 'team1', members: '16'},
    {srNo: '1', name: 'team1', members: '12'},
    {srNo: '1', name: 'team1', members: '15'},
    {srNo: '1', name: 'team1', members: '14'},
    {srNo: '1', name: 'team1', members: '13'},
    {srNo: '1', name: 'team1', members: '11'}
  ];
  displayedColumns: string[] = ['srNo', 'name', 'members', 'action'];

  // @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private service: TeamService, private toaster: ToastrService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.getTeamList();
  }

  getTeamList(): void {
    this.service.getTeam().subscribe((res: any) => {
      if (res.data) {
        this.dataSource = res.data;
      }
    });
  }

  delete(elem: any): void {
    this.service.deleteTeam(elem.id).subscribe((res: any) => {
      if (res.data) {
        this.toaster.success('Team is deleted', 'Success');
        this.getTeamList();
      }
    });
  }

  edit(elem: any): void {
    const updateTeam = this.dialog.open(CreateTeamComponent, {data: {openAs: 'Update', elem}}).afterClosed().subscribe(res => {
      if (res === 'close') {
        this.getTeamList();
      }
    });
  }

  createTeam(): void {
    this.dialog.open(CreateTeamComponent, {data: {openAs: 'Create'}}).afterClosed().subscribe(res => {
      if (res === 'close') {
        this.getTeamList();
      }
    });
  }

  preview(elem: any): void {
    this.dialog.open(ViewTeamComponent, {data: elem, width: '30%'});
  }
}

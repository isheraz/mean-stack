import { MatDialog } from '@angular/material/dialog';
import { BlogService } from '../../services/blogService/blog.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommentsComponent } from '../comments/comments.component';
import { DeletePopupComponent } from '../popups/delete-popup/delete-popup.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService, private toastr: ToastrService, private dialog: MatDialog) {
  }

  data = [
    {
      'id': 1,
      'title': 'Title of Blog 1 Title of Blog 1 Title of Blog 1',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      'status': 0
    },
    {
      'id': 2,
      'title': 'Title of Blog 2',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      'status': 0
    },
    { 'id': 3, 'title': 'Title of Blog 3', 'description': 'Description of the Blog 3', 'status': 0 },
    { 'id': 4, 'title': 'Title of Blog 4', 'description': 'Description of the Blog 3', 'status': 0 },
    { 'id': 5, 'title': 'Title of Blog 5', 'description': 'Description of the Blog 3', 'status': 0 }

  ];

  ngOnInit(): void {
    this.getBlogs();

  }

  getBlogs() {
    this.blogService.getBlogs().subscribe((res: any) => {
      if (res.data) {
        this.data = res.data;
      } else {
        this.data = [];
      }
    });
  }

  deleteBlog(id: any) {
    this.blogService.delete(id).subscribe((res: any) => {
      this.getBlogs();
      this.toastr.success('Blog Deleted Successfully!', 'Deleted Blog');
    });
  }

  openComments(blog: any) {
    this.dialog.open(CommentsComponent, { data: blog, width: '50%', height: '80%' });
  }

  onDeleteHandler(elem: any) {
    this.dialog.open(DeletePopupComponent, {
      maxWidth: '400px',
      width: '500px',
      data: { id: elem.id, name: elem.title, openFor: 'blog' }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.deleteBlog(elem.id)
      }
    });
  }

}

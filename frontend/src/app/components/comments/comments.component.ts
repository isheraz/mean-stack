import { CommentService } from '../../services/commentService/comment.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { BlogService } from '../../services/blogService/blog.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments = [
    {
      id: 1,
      text: '',
      User: {
        'name': ''
      }
    }
  ];

  name = new FormControl('');

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private commentService: CommentService, private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.comments = this.data.Comment;
  }

  addComment() {
    if (this.name) {
      const comment = this.name.value;
      const userId = sessionStorage.getItem('user.id');
      this.commentService.createComment({ 'text': comment, 'userId': 1, 'blogId': this.data.id }).subscribe(res => {
        this.name = new FormControl('');
        this.comments.push(res.data);
      });
    }
  }

  deleteComment(id: any) {
    this.commentService.deleteComment(id).subscribe(res => {
      this.comments = this.comments.filter((val) => val.id !== id);
      this.data.Comment = this.comments;
      this.updateBlog(this.data);
    });
  }

  updateBlog(blog: any) {
    const id = blog.id;
    delete blog.id;
    this.blogService.update(id, blog).subscribe();
  }

}

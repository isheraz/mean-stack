import { BlogService } from '../../services/blogService/blog.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface Statuses {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})

export class NewBlogComponent {
  blogForm: any;
  blogId: string = '';
  status: string = "";
  statuses: Statuses[] = [
    {value: '1', viewValue: 'Active'},
    {value: '0', viewValue: 'In-Active'}
  ];

  constructor(private service: BlogService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private toastr:ToastrService){};

  ngOnInit() {
    this.createForm();
  };
  createForm() {

    this.route.params.subscribe(params => {
      this.blogId = params['id'];
    });
    this.blogForm = this.fb.group({
      id: [, []],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });

    if(this.blogId != undefined){
       this.getBlogById(this.blogId);
    }

  }

  createBlog() {
    let body = this.blogForm.value;
    let user: any = sessionStorage.getItem('User');
    let userId = user ? user.id : 1;
    body= {...body, userId}

    if (body.id) {
      const id = body.id;
      delete body.id;
      this.service.update(id, body).subscribe((res: any) => {
        if (res.data) {
          this.router.navigateByUrl('/blog');
          this.toastr.success('Blog Created Successfully!' , 'Created Blog');
        }else{
          this.toastr.error('Blog Created Failed!' , 'Created Blog');
        }
      });
    } else {
      this.service.createBlog(body).subscribe((res: any) => {
        if (res.data) {
          this.router.navigateByUrl('/blog');
          this.toastr.success('Blog Updated Successfully!' , 'Updated Blog');
        }else{
          this.toastr.error('Blog Updated Failed!' , 'Updated Blog');
        }
      });
    }
  }

  getBlogById(id: any){
    this.service.getBlogById(id).subscribe((res: any) => {
      this.blogForm = this.fb.group({
        id: [res.data.id, []],
        title: [res.data.title, [Validators.required]],
        description: [res.data.description, [Validators.required]],
        status: [res.data.status, [Validators.required]],
      });
      this.status = res.data.status;
    });
  }
}

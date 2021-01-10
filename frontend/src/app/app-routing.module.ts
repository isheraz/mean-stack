import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'blog' , component: BlogComponent},
  {path: 'blog/:id/edit', component: NewBlogComponent},
  {path: 'blog/create' , component: NewBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [BlogComponent]

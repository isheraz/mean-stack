import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: 'blog' , component: BlogComponent},
  {path: 'blog/:id/edit', component: NewBlogComponent},
  {path: 'blog/create' , component: NewBlogComponent},
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [BlogComponent]

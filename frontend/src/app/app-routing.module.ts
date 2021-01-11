import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TeamComponent } from './components/team/team.component';
import { EventComponent } from './components/event/event.component';
import { PwaWorkComponent } from './components/pwa-work/pwa-work.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id/edit', component: NewBlogComponent },
  { path: 'blog/create', component: NewBlogComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'team', component: TeamComponent },
  { path: 'event', component: EventComponent },
  { path: 'pwa', component: PwaWorkComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponent = [BlogComponent];

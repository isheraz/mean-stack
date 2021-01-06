import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './components/event/event.component';
import { EventFormComponent } from './components/event/event-form/event-form.component';
import { EventViewComponent } from './components/event/event-view/event-view.component';
import { DeletePopupComponent } from './components/popups/delete-popup/delete-popup.component';
import {AppRoutingModule, routingComponent} from './app-routing.module';
import {AppComponent} from './app.component';
import {TeamComponent} from './components/team/team.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterService } from './services/register.service';
import {MatCardModule} from '@angular/material/card';

import {MatTableModule} from '@angular/material/table';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {CreateTeamComponent} from './components/team/create-team/create-team.component';
import {ViewTeamComponent} from './components/team/view-team/view-team.component';

import { NewBlogComponent } from './components/new-blog/new-blog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ToastrModule } from 'ngx-toastr';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';

import { CommentsComponent } from './components/comments/comments.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
=======
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventComponent } from './components/event/event.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { ToastrModule } from 'ngx-toastr';
import { EventFormComponent } from './components/event/event-form/event-form.component';
import { EventViewComponent } from './components/event/event-view/event-view.component';
import { DeletePopupComponent } from './components/popups/delete-popup/delete-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTeamComponent } from './components/team/create-team/create-team.component';
import { ViewTeamComponent } from './components/team/view-team/view-team.component';
import { BlogComponent } from './components/blog/blog.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HeaderComponent } from './components/header/header.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { TeamComponent } from './components/team/team.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';

>>>>>>> rebased with models-names branch
@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventFormComponent,
    EventViewComponent,
    DeletePopupComponent,
<<<<<<< HEAD
    TeamComponent,
    CreateTeamComponent,
    ViewTeamComponent,
    CommentsComponent,
    HeaderComponent,
    routingComponent,
    NewBlogComponent,
    BlogComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent
=======
    BlogComponent,
    CommentsComponent,
    HeaderComponent,
    NewBlogComponent,
    TeamComponent,
    CreateTeamComponent,
    ViewTeamComponent
>>>>>>> rebased with models-names branch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatTableModule,
    FlexModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSortModule,    
    MatSelectModule,
    AngularMaterialModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
<<<<<<< HEAD
    MatGridListModule,
    MatBadgeModule
=======
    ReactiveFormsModule,
    MatBadgeModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatSortModule
>>>>>>> rebased with models-names branch
  ],
  entryComponents: [
    CreateTeamComponent,
    ViewTeamComponent,
    CommentsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
<<<<<<< HEAD
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    RegisterService
  ],
  
=======
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  entryComponents: [
    CreateTeamComponent,
    ViewTeamComponent
  ],
  bootstrap: [ AppComponent ]
>>>>>>> rebased with models-names branch
})
export class AppModule {
}

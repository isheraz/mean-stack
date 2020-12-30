import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './event/event.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { EventViewComponent } from './event/event-view/event-view.component';
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
import { ToastrModule } from 'ngx-toastr';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {CreateTeamComponent} from './components/team/create-team/create-team.component';
import {ViewTeamComponent} from './components/team/view-team/view-team.component';
import {MatSelectModule} from '@angular/material/select';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';

import { NewBlogComponent } from './components/new-blog/new-blog.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { CommentsComponent } from './components/comments/comments.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventFormComponent,
    EventViewComponent,
    DeletePopupComponent,
    TeamComponent,
    CreateTeamComponent,
    ViewTeamComponent,
    CommentsComponent,
    HeaderComponent,
    routingComponent,
    NewBlogComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatTableModule,
    FlexModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSortModule,    
    MatSelectModule,
    AngularMaterialModule
  ],
  entryComponents: [
    CreateTeamComponent,
    ViewTeamComponent,
    CommentsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    RegisterService
  ],
  
})
export class AppModule {
}

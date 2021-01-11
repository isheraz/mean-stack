import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './components/event/event.component';
import { EventFormComponent } from './components/event/event-form/event-form.component';
import { EventViewComponent } from './components/event/event-view/event-view.component';
import { DeletePopupComponent } from './components/popups/delete-popup/delete-popup.component';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterService } from './services/RegisterService/register.service';
import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CreateTeamComponent } from './components/team/create-team/create-team.component';
import { ViewTeamComponent } from './components/team/view-team/view-team.component';

import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ToastrModule } from 'ngx-toastr';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';

import { CommentsComponent } from './components/comments/comments.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { JwtIntercepterService } from './services/Jwt-intercepter/jwt-intercepter.service';

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
    RegisterComponent,
    HomeComponent,
    LoginComponent
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
    MatGridListModule,
    MatBadgeModule,
    MatListModule
  ],
  entryComponents: [
    CreateTeamComponent,
    ViewTeamComponent,
    CommentsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    RegisterService, {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtIntercepterService,
      multi: true
    }
  ]

})

export class AppModule {
}

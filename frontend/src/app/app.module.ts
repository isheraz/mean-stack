import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { EventComponent } from './event/event.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { EventViewComponent } from './event/event-view/event-view.component';
import { DeletePopupComponent } from './components/popups/delete-popup/delete-popup.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TeamComponent} from './components/team/team.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ToastrModule} from 'ngx-toastr';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {CreateTeamComponent} from './components/team/create-team/create-team.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ViewTeamComponent} from './components/team/view-team/view-team.component';
import {MatSelectModule} from '@angular/material/select';
import { CommentsComponent } from './components/comments/comments.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';

import { NewBlogComponent } from './components/new-blog/new-blog.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ToastrModule } from 'ngx-toastr';
import { CommentsComponent } from './components/comments/comments.component';
import { FlexLayoutModule } from '@angular/flex-layout';
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
    CommentsComponent
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
    MatSelectModule
  ],
  entryComponents: [
    CreateTeamComponent,
    ViewTeamComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatBadgeModule,
    ToastrModule.forRoot(),
    FlexLayoutModule,
    MatDialogModule
  ],
  entryComponents:[
    CommentsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
})
export class AppModule {
}

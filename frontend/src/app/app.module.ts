import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventComponent } from './event/event.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { EventFormComponent } from './event/event-form/event-form.component';
import { EventViewComponent } from './event/event-view/event-view.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeletePopupComponent } from './components/popups/delete-popup/delete-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventFormComponent,
    EventViewComponent,
    DeletePopupComponent
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
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

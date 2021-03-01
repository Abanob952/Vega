import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { VehicleFormComponent } from './Components/vehicle-form/vehicle-form.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { MakeService } from './Services/make.service';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule,
    FormsModule,
    ToastyModule.forRoot()
  ],
  providers: [MakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from 'src/app/services/trip-data.service';
import { AddTripComponent } from './add-trip/add-trip.component';
@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    TripDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

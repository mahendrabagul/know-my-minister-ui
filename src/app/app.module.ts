import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MinisterListComponent } from './minister-list/minister-list.component';
import { MinisterDetailComponent } from './minister-detail/minister-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ApiService } from './api.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarService } from './navbar/navbar.service';
import { MinisterListService } from './minister-list/minister-list.service';
import { GeolocationService } from './geolocation.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MinisterDetailService } from './minister-detail/minister-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MinisterListComponent,
    MinisterDetailComponent,
    PageNotFoundComponent
  ],
  imports: [NgbModule.forRoot(),
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [MinisterDetailService, ApiService, MinisterListService, NavbarService, GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { MinisterListComponent } from './minister-list/minister-list.component';
import { MinisterDetailComponent } from './minister-detail/minister-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ApiService } from './api.service';
import { SearchService } from './search.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MinisterListComponent,
    MinisterDetailComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule.forRoot(), AppRoutingModule
  ],
  providers: [ApiService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

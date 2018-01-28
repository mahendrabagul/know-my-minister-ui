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
import { SearchService } from './minister-list/search.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MinisterListComponent,
    MinisterDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [ApiService, SearchService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

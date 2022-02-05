import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlickCarouselModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },

        {
          path: 'contact',
          component: ContactComponent,
        },
        {
          path: 'services',
          component: ServicesComponent,
        },
        {
          path: 'about',
          component: AboutComponent,
        },
        // {
        //   path: 'time-sheet',
        //   component: TimesheetComponent,
        // },
        // {
        //   path: 'manage/:id1/:id2',
        //   component: ManageactComponent,
        // },
      ],
      { onSameUrlNavigation: 'reload' }
    ),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

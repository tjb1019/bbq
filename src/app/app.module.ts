import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { RouteManagementService } from './services/route-management.service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { MenuComponent } from './views/menu/menu.component';
import { PhotosComponent } from './views/photos/photos.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { MapComponent } from './components/map/map.component';
import { PhotoComponent } from './components/photo/photo.component';

const appRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    PhotosComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    MapComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDmAf6nbphTwvEeTbvYkg2bNHERKnNoxw'
    })
  ],
  providers: [
    RouteManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

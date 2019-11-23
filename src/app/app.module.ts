import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { FooterComponent } from './shell/footer/footer.component';
import { SectionHeroComponent } from './pages/home/section-hero/section-hero.component';
import { SectionEventsComponent } from './pages/home/section-events/section-events.component';
import { SectionRulesComponent } from './pages/home/section-rules/section-rules.component';
import { SectionGalleryComponent } from './pages/home/section-gallery/section-gallery.component';
import { SectionEshopComponent } from './pages/home/section-eshop/section-eshop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SectionHeroComponent,
    SectionEventsComponent,
    SectionRulesComponent,
    SectionGalleryComponent,
    SectionEshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CarouselModule,
    WavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

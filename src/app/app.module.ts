import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeService } from './service/poke.service';
import { DescriptionComponent } from './components/description/description.component';
import { AbilityComponent } from './components/ability/ability.component';
import { CaruselImgComponent } from './components/carusel-img/carusel-img.component';
import { EvolucionComponent } from './components/evolucion/evolucion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DescriptionComponent,
    AbilityComponent,
    CaruselImgComponent,
    EvolucionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { LatestComponent, PoliticsComponent } from './pages/index'
import { routing, appRoutingProviders } from './routing/app.routing';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, LatestComponent, PoliticsComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

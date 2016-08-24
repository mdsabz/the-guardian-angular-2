import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { LatestComponent } from './pages/latest.component';
import { YesterdayComponent } from './pages/yesterday.component';

import { routing, appRoutingProviders } from './routing/app.routing';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, LatestComponent, YesterdayComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

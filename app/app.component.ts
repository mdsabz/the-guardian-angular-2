import { Component } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';

import { MDL } from './material-design-lite-upgrade-element';

import { DataService } from './data/data.service';

import { HeaderComponent, DrawerComponent, ContentComponent } from './shell/index';

@Component({
    moduleId: __filename,
    selector: 'guardian-app',
    templateUrl: 'app.component.html',
    directives: [MDL, HeaderComponent, DrawerComponent, ContentComponent],
    providers: [HTTP_PROVIDERS, DataService]
})
export class AppComponent { }

import { Component } from '@angular/core';

import { MDL } from './material-design-lite-upgrade-element';

import { HeaderComponent } from './shell/header/header.component';
import { DrawerComponent } from './shell/drawer/drawer.component';
import { ContentComponent } from './shell/content/content.component';

@Component({
    moduleId: __filename,
    selector: 'guardian-app',
    templateUrl: 'app.component.html',
    directives: [MDL, HeaderComponent, DrawerComponent, ContentComponent]
})
export class AppComponent { }

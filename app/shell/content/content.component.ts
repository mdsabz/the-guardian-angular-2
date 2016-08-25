import { Component, OnInit } from '@angular/core';

import { SharedService } from './../../shared/shared.service';

@Component({
    moduleId: __filename,
    selector: '[mainContent]',
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.css'],
})
export class ContentComponent implements OnInit {
    constructor(private _sharedService: SharedService) { }

    ngOnInit() { }
}

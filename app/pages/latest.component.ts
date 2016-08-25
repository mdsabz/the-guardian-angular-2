import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DataService } from './../data/data.service';

@Component({
    moduleId: __filename,
    selector: 'latest-news',
    templateUrl: 'latest.component.html'
})
export class LatestComponent implements OnInit {
    latestArticles: Promise<any[]>;

    constructor(private _dataService: DataService) { }

    ngOnInit() { this.getLatest(); }

    getLatest() {
        this._dataService.getLatest()
            .then((response) => {
                console.log(response);
            });
    }
}
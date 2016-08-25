import { Component, OnInit } from '@angular/core';

import { DataService } from './../data/data.service';

import { HeadlineComponent } from './../article/headline.component';

@Component({
    moduleId: __filename,
    selector: 'latest-news',
    templateUrl: 'latest.component.html',
    directives: [HeadlineComponent]
})
export class LatestComponent implements OnInit {
    latestArticles: any[];

    constructor(private _dataService: DataService) { }

    ngOnInit() { this.getLatest(); }

    getLatest() {
        this._dataService.getLatest()
            .then((articles: any[]) => {
                this.latestArticles = articles;
            });
    }
}
import { Component, OnInit } from '@angular/core';

import { DataService } from './../data/data.service'

import { HeadlineComponent } from './../article/headline.component';

@Component({
    moduleId: __filename,
    selector: 'political-headlines',
    templateUrl: 'politics.component.html',
    directives: [HeadlineComponent]
})
export class PoliticsComponent implements OnInit {
    politicalHeadlines: any[];

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this.getPoliticalHeadlines();
     }

     getPoliticalHeadlines() {
         this._dataService.getPolitics()
            .then((articles: any[]) => {
                this.politicalHeadlines = articles;
            });
     }
}
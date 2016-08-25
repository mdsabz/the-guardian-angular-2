import { Component, Input, OnInit } from '@angular/core';

import { DataService } from './../data/data.service';

@Component({
    moduleId: __filename,
    selector: 'headline',
    templateUrl: 'headline.component.html',
    styleUrls: ['headline.component.css']
})
export class HeadlineComponent implements OnInit {
    @Input() headline: any;

    constructor(private _dataService: DataService) { }

    ngOnInit() { }

    getSingleArticle() {
        this._dataService.getSingle(this.headline.apiUrl)
            .then(function (response) {
                console.log(response);
            });
    }
}

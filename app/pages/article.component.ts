import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../data/data.service';

interface Params {
    id?: string
}

interface Article {
    webTitle: string;
}

@Component({
    moduleId: __filename,
    selector: 'article-detail',
    templateUrl: 'article.component.html'
})
export class ArticleComponent implements OnInit {
    webTitle: string = 'test';
    article: any;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _dataService: DataService
    ) { }

    ngOnInit() {
        this._activatedRoute.params.subscribe((params: Params)  => {
            this.getArticle(params.id);
        });
    }

    getArticle(id: string) {
        this._dataService.getArticle(id)
            .then(article => {
                this.article = article;
            });
    }
}
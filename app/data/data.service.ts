import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

const baseUrl = 'http://content.guardianapis.com/';
const apiKey = 'api-key=25c69cf1-2670-41cd-826e-8482e84cfe11';

@Injectable()
export class DataService {
    constructor(private _http: Http) { }

    getLatest() {
        return this._http.get(baseUrl + '/search?show-fields=standfirst,thumbnail,trailText&' + apiKey)
            .map((response: Response) => response.json().response.results)
            .toPromise();
    }

    getSingle(url: string) {
        return this._http.get(url + '?' + apiKey)
            .map((response: Response) => response.json())
            .toPromise();
    }
}
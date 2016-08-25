import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const baseUrl = 'http://content.guardianapis.com/';
const apiKey = 'api-key=25c69cf1-2670-41cd-826e-8482e84cfe11';

@Injectable()
export class DataService {
    constructor(private _http: Http) { }

    getLatest() {
        return this._http.get(baseUrl + '/search?' + apiKey)
            .map((response: Response) => response.json().response.results)
            .toPromise()
            //.catch(this.handleError);
    }

    handleError(error: Response) {
        console.log(error);
        return 'Server error';
    }
}

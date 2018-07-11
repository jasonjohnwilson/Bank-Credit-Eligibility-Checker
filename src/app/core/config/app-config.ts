import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IAppConfig } from './app-config.model';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable()
export class AppConfig {
    settings: IAppConfig;

    constructor(private http: Http) { }

    load() {
        const path = `assets/config/config.${environment.name}.json`;

        return new Promise((resolve, reject) => {

            this.http.get(path).
                pipe(map((response: any) => {
                    return <IAppConfig>response.json();
                }))
                .subscribe((appConfig: IAppConfig) => {
                    this.settings = appConfig;
                    resolve(true);
                });
        });
    }
}



import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  heroesURL: string = "https://heroesapp-6de49.firebaseio.com/heroes.json";

  constructor( private http: Http ) { }

  newHeroe( heroe: Heroe ) {

    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers: headers} )
          .map( res => {
            console.log(res.json());
            return res.json();
          })
  }

}

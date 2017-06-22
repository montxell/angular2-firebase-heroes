import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading: boolean = true;

  constructor( private _heroesService: HeroesService ) {

    this._heroesService.getHeroes()
        .subscribe( data => {
          // console.log(data)
          this.heroes = data;
          this.loading = false;
        })
  }

  /* IF CONNECTION IS SLOW OR BECAUSE WE LIKE, WE CAN SHOW LOADING MESSAGE FOR 3 SECONDS
    this._heroesService.getHeroes()
        .subscribe( data => {
          // console.log(data)
          setTimeout( () => {
            this.loading = false;
            this.heroes = data;
          }, 3000 );
        })
  */

  ngOnInit() {
  }


  delete( key$: string ) {

    this._heroesService.deleteHeroe(key$)
        .subscribe( response => {
          if ( response ) {
            console.error( response );
          } else {
            delete this.heroes[key$];
          }
        })
  }
}

import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor( private _heroesService: HeroesService ) {

    this._heroesService.getHeroes()
        .subscribe( data => {

          console.log(data);
          this.heroes = data;

        })

  }

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

import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    name: "",
    bio: "",
    universe: "Marvel"
  }

  new: boolean = false;
  id: string;

  constructor( private _heroesService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params
        .subscribe( parameters =>
          this.id = parameters['id']
        );
    }

  ngOnInit() {
  }

  save() {
    console.log(this.heroe);
    if ( this.id == "new") {
      // inserting heroe
      this._heroesService.newHeroe( this.heroe )
            .subscribe( data => {
              this.router.navigate(['/heroe', data.name])
            },
            error => console.error(error));
    } else {
      // updating heroe
      this._heroesService.updateHeroe( this.heroe, this.id )
            .subscribe( data => {
              console.log(data);
            },
            error => console.error(error));
    }

  }

}

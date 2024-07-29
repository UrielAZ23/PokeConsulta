import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokeService } from '../../service/poke.service';
import { pokemon } from '../../Models/pokemon';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  idPoke:string
  cambio:number=1
  pokemon= new pokemon()
  constructor(private activateRoute:ActivatedRoute, private _pokeService:PokeService){

    this.idPoke=this.activateRoute.snapshot.paramMap.get('_id')
    console.log(this.activateRoute.snapshot.paramMap.get('_id'))


  }

ngOnInit(): void {
  this._pokeService.getPokemon(this.idPoke).subscribe(pokemon=>{
    this.pokemon.name=pokemon.name
    this.pokemon._id=pokemon.id
    this.pokemon.name=pokemon.name
    console.log(pokemon)
    console.log(this.pokemon.name)
  })
}

pagination(swuitch){
this.cambio=swuitch
}

}

import { Component } from '@angular/core';
import { PokeService } from '../../service/poke.service';
import { pokemon } from '../../Models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Pokemons:Array<pokemon>= [];
  partUrl:string[]

  name:string;
  id:string;
  constructor(private _pokeservice:PokeService){
    this._pokeservice.getPokemones().forEach(pokemon=>{
      pokemon.results.forEach(element => {
        this.Pokemons.push(element);
         this.partUrl=element.url.split('/')
        element._id=this.partUrl[6]
       });
    })
    console.log(this.Pokemons)
  }



}

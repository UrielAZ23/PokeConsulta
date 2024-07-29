import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../../service/poke.service';
import { Abilities } from '../../Models/Abilities';
import { async, pipe } from 'rxjs';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrl: './ability.component.css'
})
export class AbilityComponent {

  idPoke:string
  ability:Array<any>=[]
  abilities:Array<any>
  abil:Abilities= new Abilities()
  pokeAbilities:Array<Abilities>=[]
  constructor(private activateRoute:ActivatedRoute, private _pokeService:PokeService){

    this.idPoke=this.activateRoute.snapshot.paramMap.get('_id')
      console.log(this.activateRoute.snapshot.paramMap.get('_id'))
  }

  ngOnInit() {
    this._pokeService.getPokemon(this.idPoke).subscribe(pokemon=>{
      pokemon.abilities.forEach(element => {
        this.ability.push(element.ability.name)
      });
      // console.log(pokemon.abilities[0].ability.name)
      // console.log(this.ability)

      this.ability.forEach( element=>{


        this._pokeService.getAbility(element).subscribe(pipe => {
          console.log(this.ability);
          pipe.flavor_text_entries.forEach(element => {
            if (element.language.name == 'es' && element.version_group.name == 'lets-go-pikachu-lets-go-eevee') {
              // console.log(pipe);
              this.abil.name=pipe.name
             this.abil.effect = element.flavor_text;
             this.abil.id = pipe.id;
             this.abil.pokemones = pipe.pokemon;
             this.pokeAbilities.push(this.abil);
             this.abil = new Abilities()
            //  console.log("este es el bueno");
             console.log(this.pokeAbilities);
           }
         });

       })
      })
    })




  }

}

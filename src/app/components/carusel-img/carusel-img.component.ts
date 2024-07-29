import { Component, Input } from '@angular/core';
import { Abilities } from '../../Models/Abilities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carusel-img',
  templateUrl: './carusel-img.component.html',
  styleUrl: './carusel-img.component.css'
})
export class CaruselImgComponent {


  @Input() pokemones:any
  @Input() effect:string

  list:Array<string>
  pipe:any
  listaPoke:Array<any>=[]
  idPoke:any
  constructor(private activateRoute:ActivatedRoute){
    this.idPoke=parseInt(this.activateRoute.snapshot.paramMap.get('_id'))
    console.log(this.activateRoute.snapshot.paramMap.get('_id'))
  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log(this.pokemones)
  this.pokemones.forEach(element=>{
    this.list=element.pokemon.url.split("/")
    this.pipe=parseInt(this.list[6])
    if(this.pipe<152 && this.pipe != this.idPoke){
      this.listaPoke.push(this.pipe)
    }
  })
  console.log(this.listaPoke)
  }


}

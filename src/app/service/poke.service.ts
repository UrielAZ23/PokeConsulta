import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./Global";

@Injectable({
  providedIn:"root"
})

export class PokeService{
  public url: string;

  constructor( private _http:HttpClient){
    this.url = Global.url;
  }

  getImage(name):Observable<any>{
    return this._http.get(this.url+name)
  }

  getPokemones():Observable<any>{
    return this._http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
  }

  getPokemon(id):Observable<any>{
    return this._http.get('https://pokeapi.co/api/v2/pokemon/'+id)

  }

  getAbility(ability):Observable<any>{
    return this._http.get('https://pokeapi.co/api/v2/ability/'+ability)
  }


}
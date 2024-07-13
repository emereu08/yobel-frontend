import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private http = inject(HttpClient);

  characterBuscar!: Character;

  characterFinal!: Character;

  getCharacterBuscar():Character {
    return this.characterBuscar;
  }

  setCharacterBuscar(character: Character){
    this.characterBuscar = character;
  }

  getCharacterFinal():Character {
    return this.characterFinal;
  }

  setCharacterFinal(character: Character){
    this.characterFinal = character;
  }

  constructor() { }

  getCharacters(nombre: string) {

    nombre = nombre.replace(/\s/g, '%20')

    var url = 'http://localhost:8080/api/characters/buscar/'+nombre;

    return this.http.get(url);

  }

  listar(character: Character){
    console.log(character);
  }
  

}

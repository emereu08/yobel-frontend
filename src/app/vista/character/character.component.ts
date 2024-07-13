import { Component, inject, Input, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../model/character';
import { Location} from '../../model/location';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {

  nombrePersonaje: string = '';

  character: Character | undefined;
  location: Location | undefined;
  origin: Location | undefined;

  resultado: boolean = false; 
  noEncontrado: boolean = false;
  cargando: boolean = false;
  alerta: boolean = false;
  disabled: boolean = false;

  //private _charactersService = inject(CharactersService);

  constructor(
    private _charactersService: CharactersService
  ){}

  ngOnInit(): void {

  }

  buscar(){
    if(this.nombrePersonaje == ''){
      this.disabled = true;
      this.alerta = true;
      setTimeout(()=>{                        
        this.alerta = false;
        this.disabled = false;
      }, 1500);

      return;
    }

    this.cargando = true;
    this.resultado = false;

    this._charactersService.getCharacters(this.nombrePersonaje).subscribe((datos : any) => {
      
      if(datos.code == 200){
        this.resultado = true;
        this.character = datos.body;
        
        this.location = datos.body.lastKnownLocation;

        console.log(this.location);

        this.origin = datos.body.originLocation;
      }

      if(datos.code == 404){
        this.resultado = false;
        this.noEncontrado = true;
      }

      this.cargando = false;
    }); 

    
  }
}

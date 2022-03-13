import { Injectable } from '@angular/core';
import axios from 'axios';
import { PokemonModel } from '../model/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  constructor() { }

  findPokemon = (): PokemonModel => {
    const pokemonTest : PokemonModel =  {
      Name: "Pikachu",
      Type: "Elétrico"
    };
    
    return pokemonTest;
  }
}

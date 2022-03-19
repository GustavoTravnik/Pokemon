import { Injectable } from '@angular/core';
import axios from 'axios';
import { DefaultRequestModel } from '../model/default-request-model';
import { PokemonModel } from '../model/pokemon-model';
import { apiContants } from './api-constants';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  constructor() { }

  public findPokemon = (pokemonSearchText: string): Promise<DefaultRequestModel<PokemonModel>> => {
    const params = new URLSearchParams([['pokemonName', pokemonSearchText]]);
    return axios.get(apiContants.searchPokemonUrl, {params})
  }
}

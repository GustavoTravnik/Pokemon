import { Component, OnInit } from '@angular/core';
import { AppComponentService } from '../service/app-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private appComponentService: AppComponentService) { }

  ngOnInit() {

  }
  
  title = 'Pokemon Mania';
  pokemonSearchText = '';

  public searchPokemon = () => {
    this.appComponentService.findPokemon(this.pokemonSearchText).then(p => {
      alert(p.data.name);
    });
  }
}

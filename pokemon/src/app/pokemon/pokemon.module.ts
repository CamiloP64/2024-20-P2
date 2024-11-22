import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  imports: [CommonModule, PokemonRoutingModule],
  declarations: [PokemonListComponent, PokemonDetailComponent],
  exports: [PokemonListComponent, PokemonDetailComponent],
})
export class PokemonModule {}

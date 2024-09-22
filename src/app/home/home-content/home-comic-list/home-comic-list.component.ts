import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { IAnime } from '../../home-model/IComic';
import { animesSelector } from '../../home-state/home.reducer';
import { State } from 'src/app/app.state';

@Component({
  selector: 'app-home-comic-list',
  templateUrl: './home-comic-list.component.html',
  styleUrls: ['./home-comic-list.component.css']
})
export class HomeComicListComponent implements OnInit{
  animeList!: IAnime[];

  constructor(private store: Store<State>) {}
  ngOnInit(): void {
      this.store.select(animesSelector).subscribe((animes: IAnime[]) => {
          this.animeList = animes;
      })
  }

}

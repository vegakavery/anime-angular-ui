import { Component, OnInit } from '@angular/core';
import { IAnime } from '../home-model/IComic';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { moviesSelector } from '../home-state/home.reducer';
import { State } from 'src/app/app.state';

@Component({
  selector: 'app-trending-comic-list',
  templateUrl: './trending-comic-list.component.html',
  styleUrls: ['./trending-comic-list.component.css']
})
export class TrendingComicListComponent implements OnInit {

  movies!: IAnime[];

  constructor(private store: Store<State>, private router: Router) {}
  ngOnInit(): void {
      this.store.select(moviesSelector).subscribe(movies => {
          this.movies = movies;
      })
  }

  navigate(id: number):void {
      this.router.navigate([`anime/${id}`]);
  }
}
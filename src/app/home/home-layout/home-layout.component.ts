import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { animesLoadingSelector, moviesLoadingSelector } from '../home-state/home.reducer';
import * as HomeActions from "../home-state/home.action";

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent  implements OnInit {

  moviesStatus!: boolean;
  animesStatus!: boolean;

  constructor(private store: Store) {}
  ngOnInit(): void {
      this.store.select(moviesLoadingSelector).subscribe(status => {
          this.moviesStatus = status;
      })

      this.store.select(animesLoadingSelector).subscribe(status => {
          this.animesStatus = status;
      })

      this.store.dispatch(HomeActions.loadAnimes());
      this.store.dispatch(HomeActions.loadMovies());
  }
}
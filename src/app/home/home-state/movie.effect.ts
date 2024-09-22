import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as HomeActions from "./home.action";
import { map, mergeMap } from "rxjs";
import { ComicService } from "../home-services/comic.service";

@Injectable()
export class MovieEffect {

    constructor(private animeService: ComicService, private actions$: Actions) {}
    loadAnimeList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.loadMovies),
            mergeMap(() => this.animeService.getMoviesList().pipe(
                map(movies => HomeActions.loadMoviesSuccess({ movies }))
            ))
        )
    })
}
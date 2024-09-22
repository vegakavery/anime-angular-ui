import { Injectable } from "@angular/core";
import { ComicService } from "../home-services/comic.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as HomeActions from "./home.action";
import { map, mergeMap } from "rxjs";

@Injectable()
export class AnimeEffect {

    constructor(private animeService: ComicService, private actions$: Actions) {}
    loadAnimeList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.loadAnimes),
            mergeMap(() => this.animeService.getAnimeList().pipe(
                map(animes => HomeActions.loadAnimesSuccess({ animes }))
            ))
        )
    })
}
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './home-state/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AnimeEffect } from './home-state/comic.effect';
import { MovieEffect } from './home-state/movie.effect';
import { HomeComicListComponent } from './home-content/home-comic-list/home-comic-list.component';
import { ComicCardComponent } from './home-content/comic-card/comic-card.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ShortenStringPipe } from './home-services/shorten-string.pipe';
import { TrendingComicListComponent } from './trending-comic-list/trending-comic-list.component';
import { ComicService } from './home-services/comic.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
      HttpClientModule,
      EffectsModule.forFeature([AnimeEffect, MovieEffect]),
      StoreModule.forFeature("home", homeReducer),
      SharedModule,
      RouterModule
  ],
  declarations: [
    HomeComicListComponent,
    ComicCardComponent,
    HomeLayoutComponent,
    HomeContentComponent,
    ShortenStringPipe,
    TrendingComicListComponent,
  ],
  exports: [
      HomeLayoutComponent,
      ComicCardComponent,
      ShortenStringPipe
  ],
  providers: [
    ComicService
  ]
})
export class HomeModule { }

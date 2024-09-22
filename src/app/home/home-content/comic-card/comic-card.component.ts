import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAnime } from '../../home-model/IComic';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicCardComponent implements OnInit {

    @Input() anime!: IAnime;

    constructor(private router: Router) {}
    ngOnInit(): void {
    }
    
    navigate(): void {
        this.router.navigate([`anime/${this.anime.id}`]);
    }
}

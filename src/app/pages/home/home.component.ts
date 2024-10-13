import { Component, OnInit } from '@angular/core';
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { HomeService } from './services/home.service';
import { News } from './services/news';
import { Articles } from './services/articles';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BigCardComponent, 
    MenuTitleComponent,
    SmallCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  news!: News;
  bigArticle: Articles = {
    author: "",
    content: "",
    description: "",
    publishedAt: "",
    source: {id: null, name: ''},
    title: "",
    url: "",
    urlToImage: "",
  };
  articles$!: Observable<Articles[]>

  constructor(private homeService: HomeService) {}

  
  ngOnInit(): void {
    this.homeService.getPost().subscribe({
      next: data => {
        this.news = data;
        this.bigArticle = this.news.articles[0];
        this.articles$ = of(this.news.articles.splice(1, 4));
      }
    });
  }

}

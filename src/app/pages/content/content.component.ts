import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HomeService } from '../home/services/home.service';
import { News } from '../home/services/news';
import { Articles } from '../home/services/articles';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  
  news!: News;
  article: Articles = {
    author: "",
    content: "",
    description: "",
    publishedAt: "",
    source: {id: null, name: ''},
    title: "",
    url: "",
    urlToImage: "",
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private homeService: HomeService,
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      data => {
        let title = data.get('id');
        if (title) {
          this.getArticle(title);
        } else {
          this.article.title = "404"
        }        
      }
    );
  }

  getArticle(title: string) {
    // API return sets of news; doesnt have a getById method
    this.homeService.getPost().subscribe({
      next: data => {
        this.news = data;
        this.article = this.news.articles.filter(art => art.title == title)[0];
      }
    });
  }
}

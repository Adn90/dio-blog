<h1 align="center">
  Blog
</h1>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=Tipo&message=Desafio&color=8257E5&labelColor=000000" alt="Desafio" />
</p>

Blog construído em Angular 18, utilizando a News Api sobre nóticias diversas. Bootcamp Deal - Spring Boot e Angular (17+)

## Tecnologias
 
- [Angular](https://angular.dev/)

## Práticas adotadas

- SOLID
- [API REST](https://newsapi.org/) 

## API Endpoints

Para fazer as requisições HTTP abaixo, foi utilizada a ferramenta [Thunder Client](https://www.thunderclient.com/):

```
GET https://newsapi.org/v2/everything?q=tesla&from=2024-09-13&sortBy=publishedAt&apiKey=API_KEY

Status: 200 OK
Size: 265 Bytes
Time: 428 ms
```

```json
{
  "status": "ok",
  "totalResults": 4642,
  "articles": [
    {
      "source": {
        "id": null,
        "name": "Search Engine Journal"
      },
      "author": "Brooke Osmundson",
      "title": "Reddit Makes Game-Changing Updates to Keyword Targeting via @sejournal, @brookeosmundson",
      "description": "Reddit announced their keyword targeting expansion today, available on both feed and conversation ad placements. Also announced were AI keyword suggestions to help bolster performance.\nThe post Reddit Makes Game-Changing Updates to Keyword Targeting appeared …",
      "url": "https://www.searchenginejournal.com/reddit-makes-game-changing-updates-to-keyword-targeting/529841/",
      "urlToImage": "https://www.searchenginejournal.com/wp-content/uploads/2024/10/shutterstock_2430356195-924.png",
      "publishedAt": "2024-10-11T16:00:24Z",
      "content": "In a big move for digital advertisers, Reddit has just introduced a new Keyword Targeting feature, changing the game for how marketers reach their target audiences.\r\nThis addition brings fresh potent… [+5583 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Search Engine Journal"
      },
      "author": "Moz",
      "title": "Why Your Keyword Strategy Isn’t Driving Enough Traffic (And How to Fix It) via @sejournal, @Moz",
      "description": "Developing keyword strategy is an intricate, research-heavy task. Learn about the biggest mistakes and how to avoid them.\nThe post Why Your Keyword Strategy Isn’t Driving Enough Traffic (And How to Fix It) appeared first on Search Engine Journal.",
      "url": "https://www.searchenginejournal.com/moz-fix-your-keyword-strategy-spa/527357/",
      "urlToImage": "https://www.searchenginejournal.com/wp-content/uploads/2024/09/featured-815.jpg",
      "publishedAt": "2024-09-25T05:00:25Z",
      "content": "This post was sponsored by Moz. The opinions expressed in this article are the sponsor’s own.\r\nThe scope of modern keyword strategy is expansive and crosses many disciplines. As Google leans further … [+9215 chars]"
    },
  ]
}

```
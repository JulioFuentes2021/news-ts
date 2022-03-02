import NewsAPI from "newsapi";

export const newsapi = new NewsAPI("79cdc4d5b1a0412a8a8458d71c1847d3");
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2
//   .topHeadlines({
//     sources: "bbc-news,the-verge",
//     q: "bitcoin",
//     category: "business",
//     language: "en",
//     country: "us",
//   })
//   .then((response) => {
//     console.log(response);
//     /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
//   });

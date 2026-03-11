import { test } from "../utils/fixtures";
import { expect } from "../utils/custom-expect";

test("GET test", { tag: ["@smoke", "@regression"] }, async ({ publicApi }) => {
  const apiResponse = await publicApi
    .path("/posts/1")
    .clearAuth()
    .getRequest(200);
  await expect(apiResponse).shouldMatchSchema("posts", "GET_posts");
  expect(apiResponse.title).shouldEqual(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  );
});

// test("Create and Delete Article", async ({ api }) => {
//   const createArticleResponse = await api
//     .path("/articles")
//     .body({
//       article: {
//         title: "Hello World",
//         description: "Hello World",
//         body: "HELLO",
//         tagList: [],
//       },
//     })
//     .postRequest(201);
//   await expect(createArticleResponse).shouldMatchSchema(
//     "articles",
//     "POST_articles",
//   );
//   expect(createArticleResponse.article.title).shouldEqual("Hello World");
//   const slugId = createArticleResponse.article.slug;

//   const articlesResponse = await api
//     .path("/articles")
//     .params({ limit: 10, offset: 0 })
//     .getRequest(200);
//   await expect(articlesResponse).shouldMatchSchema("articles", "GET_articles");
//   expect(articlesResponse.articles[0].title).shouldEqual("Hello World");

//   await api.path(`/articles/${slugId}`).deleteRequest(204);

//   const articlesResponseTwo = await api
//     .path("/articles")
//     .params({ limit: 10, offset: 0 })
//     .getRequest(200);
//   await expect(articlesResponseTwo).shouldMatchSchema(
//     "articles",
//     "GET_articles",
//   );
//   expect(articlesResponseTwo.articles[0].title).not.shouldEqual("Hello World");
// });

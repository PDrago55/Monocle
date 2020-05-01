//------------------RECEIVE ALL TITLES-----------------//

export const requestTitle = () => ({
  type: "REQUEST_TITLES",
});

export const receiveTitle = (titles) => ({
  type: "RECEIVE_TITLES",
  titles,
});

export const receiveTitleError = () => ({
  type: "RECEIVE_TITLES_ERROR",
});

//---------------RECEIVE ONE ARTICLE------------------//

export const requestArticle = () => ({
  type: "REQUEST_ARTICLE",
});

export const receiveArticle = (article) => ({
  type: "RECEIVE_ARTICLE",
  article,
});

export const receiveArticleError = () => ({
  type: "RECEIVE_ARTICLE_ERROR",
});

//--------------RECEIVE ARTICLES BY CATEGORY-----------//

export const requestArticlesByCategory = () => ({
  type: "REQUEST_ARTICLES_BY_CATEGORIES",
});

export const receiveArticlesByCategory = (category) => ({
  type: "RECEIVE_ARTICLES_BY_CATEGORIES",
  category,
});

export const receiveArticlesByCategoryError = () => ({
  type: "RECEIVE_ARTICLES_BY_CATEGORIES_ERROR",
});

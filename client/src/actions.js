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

//--------------REVEICE CURRENT USER---------------//

export const requestCurrentUser = () => ({
  type: "REQUEST_CURRENT_USER",
});

export const receiveCurrentUser = (user) => ({
  type: "RECEIVE_CURRENT_USER",
  user,
});

export const receiveCurrentUserError = () => ({
  type: "RECEIVE_CURRENT_USER_ERROR",
});

//--------------RECEIVE SAVED ARTICLE-----------------//

export const requestSavedArticle = () => ({
  type: "REQUEST_SAVED_ARTICLE",
});

export const receiveSavedArticle = (saved) => ({
  type: "RECEIVE_SAVED_ARTICLE",
  saved,
});

export const receiveSavedArticleError = () => ({
  type: "RECEIVE_SAVED_ARTICLE_ERROR",
});

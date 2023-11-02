export interface ICreateArticle {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface ICreateArticleBody {
  article: ICreateArticle;
}

export interface ITags {
  tags: string[];
}

export interface IArticleFormValues extends ICreateArticle {
  newTag: string;
}

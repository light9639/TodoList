export interface StateList {
  list?: ListType[];
  setList?: any;
}

export interface ListType {
  MyArticle?: string;
  Count?: number;
  ThisState?: boolean;
  OriginId?: string;
}
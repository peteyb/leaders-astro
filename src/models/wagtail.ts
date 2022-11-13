export interface PageMeta {
  type: string;
  detailUrl: string;
  htmlUrl: string;
  slug: string;
  showInMenus: boolean;
  seoTitle: string;
  firstPublishedAt: Date;
}

export interface Page {
  url: string;
  title: string;
  meta: PageMeta;
  showInMenus: boolean;
  abstract: string;
}

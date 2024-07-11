export interface ArticleCompleteInfo {
  articleID: number
  makeName: string
  modelName: string
  categoryName: string
  yearName: number
  priceName: string

}

export interface MotoProps {
  articleCompleteInfo: ArticleCompleteInfo
}

export interface MotoListProps {
  moto: MotoProps[];
}
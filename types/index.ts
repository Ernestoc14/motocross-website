import { MouseEventHandler } from "react"

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

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?:
  MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
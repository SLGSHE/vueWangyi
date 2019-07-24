import ajax from './ajax'

//mock 数据
export const reqHomeData = () => ajax('/homeData')
export const reqCategoryData = () => ajax('/category')
export const reqCategoryListData = () => ajax('/categoryList')

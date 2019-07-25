import ajax from './ajax'
const BASE = '/api'
//mock 数据
export const reqHomeData = () => ajax('/homeData')
export const reqCategoryData = () => ajax('/category')
export const reqCategoryListData = () => ajax('/categoryList')


// export const reqSearchValue = (search) => ajax(BASE + '/xhr/search/searchAutoComplete.json', {

//   paramas: { keywordPrefix: search }

// })


export const reqSearchValue = (search) => ajax(BASE + `/xhr/search/searchAutoComplete.json?keywordPrefix=${search}`,
  {
    paramas: { keywordPrefix: search }
  })

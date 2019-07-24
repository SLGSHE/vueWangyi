import Mock from 'mockjs'
import categoryData from './category.json'
import categoryListData from './categoryList.json'
import homeData from './homeData.json'

Mock.mock('/homeData', {
  code: 0,
  data: homeData
})
Mock.mock('/catagory', {
  code: 0,
  data: categoryData
})
Mock.mock('/categoryList', {
  code: 0,
  data: categoryListData
})

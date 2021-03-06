// 首页API接口函数
// 导入之前我们封装好的请求工具
import request from '@/utils/request'

/**
 * 获取首页头部分类数据
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}

/**
 * 获取顶级类目信息（children属性）
 * @param {String} id - 顶级类目id
 * @returns Promise
 */
export const findTopCategory = (id) => {
  return request('/category', 'get', { id })
}

/**
 * 二级类目筛选条件
 * @param {String} id - 二级分类ID
 * @returns Promise
 */
export const findSubFilter = (id) => {
  return request('/category/sub/filter', 'get', { id })
}

/**
 * 获取分类下的商品，带筛选条件
 * @param {Object} params 请求数据
 * @returns Promise
 */
export const findSubCategoryGoods = (params) => {
  return request('/category/goods/temporary', 'post', params)
}

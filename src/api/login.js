import axios from '@/utils/request' // axios 实例引入

// 示例
/* const goods = {
  // 1. 获取所有货物信息
  getGoods: () =>
    axios({
      url: '/api/product1/v1/goods',
      method: 'get'
    }),
  // 2. 获取某条货物信息
  getGoodsById: (id) =>
    axios({
      url: `/api/product1/v1/goods/${id}`,
      method: 'get'
    }),
  // 3. 新增一条货物信息
  addGoods: (data) =>
    axios({
      url: '/api/product1/v1/goods',
      method: 'post',
      data
    }),
  // 4. 删除某条货物信息
  deleteGoodsById: (id) =>
    axios({
      url: `/api/product1/v1/goods/${id}`,
      method: 'delete'
    }),
  // 5. 更新某条货物信息
  // put 与 patch 的区别：put 所有字段均要传递；patch 可选字段传递，不用全部传
  updateGoodsById: (id, data) =>
    axios({
      url: `/api/product1/v1/goods/${id}`,
      method: 'put',
      data
    }),
  // 6. 下载货物报表
  downloadGoodsReport: (data) =>
    axios({
      url: `/api/product1/v1/goods/report`,
      method: 'post',
      data,
      responseType: 'blob' // browser only: 'blob'
    }),
  // 7. 上传货物报表
  uploadGoodsReport: (data) =>
    axios({
      url: `/api/product1/v1/goods/up_report`,
      method: 'post',
      data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
} */

const login = {
  // 1. 登录
  signIn: (data) =>
    axios({
      url: '/login',
      method: 'post',
      data
    }),
  getData: () =>
    axios({
      url: '/index?key=81162e9b9b251966bc1a2d61b99b6d1c',
      method: 'get'
    })
}

export default login
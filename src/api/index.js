// 导出API对象
import login from './login'
class API {
  constructor() {
    this.login = login
  }
}
export default new API()

import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { initialUnencryptedStorage } from '../globals'

interface AuthState {
  token: string
  landPageRoute: string
}

const NAME = 'auth'
// name: 模块名字
// namespaced 表示开启命名空间
// dynamic设置为true时，表示创建动态模块，运行时将模块注册到存储中
// preserveState 如果数据有持久化，该变量为true时可以从storage中拿取初始值
@Module({
  namespaced: true,
  name: NAME,
  dynamic: true,
  store,
  preserveState: Boolean(initialUnencryptedStorage[NAME]),
})
export class Auth extends VuexModule {
  authState: AuthState = {
    token: '',
    /** 登录前访问页面 */
    landPageRoute: '',
  }

  get isLogin(): boolean {
    return !!this.authState.token
  }

  @Mutation
  saveToken(token: string): void {
    // console.log(info)
    this.authState.token = token
  }

  @Mutation
  setLandPage(route: string): void {
    // console.log(info)
    this.authState.landPageRoute = route
  }
}

export const authStore = getModule<Auth>(Auth)

import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { initialUnencryptedStorage } from '../globals'

interface CommonState {
  /** ios微信用，记录访问时候页面url */
  visitUrl: string
}

const NAME = 'common'

@Module({
  namespaced: true,
  name: NAME,
  dynamic: true,
  store,
  preserveState: Boolean(initialUnencryptedStorage[NAME]),
})
export class Common extends VuexModule {
  commonState: CommonState = {
    visitUrl: '',
  }

  @Mutation
  saveVisitUrl(url: string): void {
    this.commonState.visitUrl = url
  }
}

export const commonStore = getModule<Common>(Common)

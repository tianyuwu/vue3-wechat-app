import type { App } from 'vue'
import { createStore } from 'vuex'
import { config } from 'vuex-module-decorators'
import createPersistedState from 'vuex-persistedstate'

config.rawError = true
const store = createStore({
  strict: false,
  plugins: [createPersistedState()],
})

export function setupStore(app: App<Element>) {
  app.use(store)
}

export default store

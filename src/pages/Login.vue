<template>
  <div class="login"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { jump2Auth, getUserInfo } from '@/hooks/useWechatAuth'
import { authStore } from '@/store/modules/auth'
import { redirectTo, getRouteQuery } from '@/hooks/usePage'

export default defineComponent({
  name: 'Login',
  components: {},
  setup() {
    let code = getRouteQuery().code as string
    // 3.如果有code，则已经授权
    if (code) {
      getUserInfo(code as string).then((res: any) => {
        // 记录token
        authStore.saveToken(res.access_token)
        const redirect = authStore.authState.landPageRoute || '/'
        // 跳转到授权前访问的页面
        redirectTo(redirect)
      })
    } else {
      // 1.记录上一个页面的地址
      const { redirect } = getRouteQuery()
      if (redirect) {
        authStore.setLandPage(redirect as string)
      }
      // 2.跳转授权
      const callbackUrl = window.location.origin + window.location.pathname
      jump2Auth(callbackUrl)
    }
  },
})
</script>
<style lang="scss" scoped></style>

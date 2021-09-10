<template>
  <div class="home">Home</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWxShare } from '@/hooks/useWxShare'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {},
  mounted() {
    useWxShare({
      title: '这是微信分享标题',
      desc: '这是微信分享描述描述',
      imgUrl: 'http://image.brightfuture360.com/static/mystery.png',
    })
  },
})

</script>
<style lang="scss" scoped>
</style>

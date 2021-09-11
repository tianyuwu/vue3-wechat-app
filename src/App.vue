<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";
import { useWxSDK } from "@/common/hooks/useWxSDK";
import { commonStore } from "@/store/modules/common";

export default defineComponent({
  setup() {},
  mounted() {
    const { isiOSWechat } = useWxSDK();
    if (isiOSWechat()) {
      const url = window.location.href.split("#")[0];
      commonStore.saveVisitUrl(url);
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  display: flex;
  justify-content: space-around;
  width: 70vw;
  margin: 0 auto;
}
</style>

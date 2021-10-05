/* eslint-disable vue/no-v-model-argument */
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue';
import {
  Layout, LayoutContent, LayoutHeader, LayoutSider, LayoutFooter,
} from 'ant-design-vue';
import navheader from './components/header/menu.vue';
import art from './components/art.vue';
import navsider from './components/sider/navsider.vue';
import content from './components/content/container.vue';
</script>
<template>
     <a-layout>
    <a-layout-header class='uheader'>
        <art></art>
        <navheader></navheader>
    </a-layout-header>
    <a-layout>
      <navsider></navsider>
      <content></content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<style lang='less'>
@import 'ant-design-vue/dist/antd.dark.less';
@import './assets/global.less';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.uheader{
  padding:0;
}
</style>

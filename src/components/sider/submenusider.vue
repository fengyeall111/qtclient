<script setup>
    import { defineProps ,reactive, toRefs } from "@vue/runtime-core";
    import { SubMenu } from "ant-design-vue";
    const ins =defineProps({  //获取传参的数据
    menuInfo:Object,
  })
   const menuobj = reactive(ins);
   window.console.log('jinlaijinlkai');
</script>
<template>
      <a-sub-menu :key='menuobj.key'>
      <template #icon><MailOutlined /></template>
      <template #title>{{ menuobj.title }}</template>
      <template v-for="item in menuobj.children" :key="item.key">
           <a-menu-item>
            {{ item.title }}
          </a-menu-item>
          </template>
      </a-sub-menu>
</template>

<style>
    #umenu{
      
    }
</style>
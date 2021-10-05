<script setup>
import { Menu } from 'ant-design-vue';
import {ref} from 'vue';
const selectedKeys = ref([]);
</script>

<template>
    <a-menu
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
        id ='navmenu'
      >
        <a-menu-item key="1">最新消息</a-menu-item>
        <a-menu-item key="2">交易所</a-menu-item>
        <a-menu-item key="3">数字货币</a-menu-item>
        <a-menu-item key="4">区块链</a-menu-item>
        <a-menu-item key="5">体验策略</a-menu-item>
        <a-menu-item key="6">登录/注册</a-menu-item>
      </a-menu>
</template>

<style>
    #navmenu{
        float:right;
        font-size:14px;
    }
   #navmenu > .ant-menu-item:hover{
         background-color: rgb(69, 41, 160);
     }
    #navmenu > .ant-menu-item:active{
         background-color:darkblue;
     }
    #navmenu >.ant-menu-item-selected{
         background-color:darkblue;
    }
</style>

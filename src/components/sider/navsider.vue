
<template>
  <a-layout-sider
    style="overflow:auto;height:90vh; position:fixed;left:0;display:inline-block"
    v-model:collapsed="collapsed"
    :trigger="null"
    collapsible
  >
    <a-button
      type="primary"
      @click="toggleCollapsed"
      style="float: right; background-color: #41484e"
    >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      id="umenu"
      mode="inline"
      :inlineIndent="1"
      :default-selected-keys="['0']"
      :default-open-keys="['1']"
    >
      <template v-for="item in list" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item  @click="loaddata(item.brief)">
            <template #icon> <ShopOutlined></ShopOutlined></template>
            {{ item.title }}
          </a-menu-item>
        </template>
        <template v-else>
               <a-sub-menu :key='item.key'>
               <template #icon> <AppstoreOutlined /></template>
               <template #title>{{ item.title }}</template>
               <template v-for="subitem in item.children"  :key ="subitem.key">
                     <a-menu-item   @click="loaddata(item.brief)">
                     <span class="nav_submenu">{{ subitem.title }}</span>
                     </a-menu-item>
               </template>
               </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>


<script>

import { ShopOutlined, MenuFoldOutlined, MenuUnfoldOutlined ,AppstoreOutlined,} from "@ant-design/icons-vue";
import { defineComponent, reactive,computed, toRefs, onMounted} from "vue";
import { Button, LayoutSider, Menu, MenuItem, SubMenu } from "ant-design-vue";
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
// todo,submenu的popupClassname不生效
export default defineComponent({
  setup() {
      const store = useStore();
      const router = useRouter();
      const route = useRoute();
      
      const list = computed(()=>store.state.sidermenu);
      const state = reactive({
      collapsed: store.state.collapsed,
      // prevlink: store.state.prevlink,
    });
    // vuex管理布局状态
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      store.commit('sidertoggle');  
    }; 
    // 网站固定的设计  
    
     //自定义指令
    onMounted(() => {
       // 默认触发dashboard的点击事件
       // console.log(state.divs['0'].$el);
      
    })
    // ajax加载数据
     const loaddata = async (brief,param = {})=>{
           // 打印当前组件的openkeys
          // 添加路由，由于路由已经配置好，所以省略
           return;  // await axios.post(brief);          
    };  
    return {
      toggleCollapsed,
      list,
      loaddata,
      ...toRefs(state)
    };
  },
  components: {
    ShopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AppstoreOutlined,
  },
});
</script>
<style lang='less'>
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #41484e;
}
@nav_submenu_padding:25px;
#umenu{
   font-size:16px;
}
.nav_submenu{
   font-size:16px;
   padding:@nav_submenu_padding;
}
</style>

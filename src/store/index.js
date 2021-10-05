import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
        BASE:'https://qtfs.site',
        sidercollapsed: false,
        sidermenu :[
          {
              key: "1",
              title: "dashboard",
              brief:"/"
            },
         {
          key: "1",
          title: "行情中心",
          children: [
            {
              key: "11",
              title: "数字货币",
              brief:"/market/currency"
            },
            {
              key: "12",
              title: "交易所",
              brief:"/market/exchange"
            },
             {
              key: "13",
              title: "区块链",
              brief:"/market/blockchain"
            },
            {
              key: "14",
              title: "项目实况",
              brief:"/market/project"
            },
            {
              key: "15",
              title: "其他信息",
              brief:"/market/other"
            }
          ],
        },
         {
          key: "2",
          title: "决策中心",
          children: [
            {
              key: "21",
              title: "筛选器",
            },
            {
              key: "22",
              title: "仓位",
            },
             {
              key: "23",
              title: "模型",
            },
            {
              key: "24",
              title: "回测",
            }    
          ],
        },
        {
          key: "3",
          title: "交易中心",
          children: [
            {
              key: "31",
              title: "历史记录",
            },
            {
              key: "32",
              title: "待成交",
            },
             {
              key: "33",
              title: "去交易",
            },  
          ],
        },
         {
          key: "4",
          title: "个人中心",
          children: [
            {
              key: "41",
              title: "接入管理",
            },
            {
              key: "42",
              title: "回测记录",
            },
             {
              key: "43",
              title: "交易记录", //按照币种分类
            }, 
              {
              key: "44",
              title: "仓位详情", //按照策略分类
            }, 
           
          ],
        },
         {
          key: "5",
          title: "系统设置",
          children: [
            {
              key: "51",
              title: "主题",
            },      
          ],
        },     
      ]
    }
  },
  mutations: {
    sidertoggle (state) {
        state.sidercollapsed = !state.sidercollapsed;
    }
  }
})
export default store;

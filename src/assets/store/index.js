import { createStore } from 'vuex';

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      sidercollapsed:false,
      dashtable: [
        {
          key: '1',
          exchange: 'gateio',
          symbol: 32,
          taker: 0.0016,
          maker: 0.0016,
          high: 1,
          low:1,
          last:1,
          vwap:1,
          percentage:1,
          baseVolume:1,
          quoteVolume:1,
        }
      ]
    }
  },
  mutations: {
    sidertoggle() {
      this.state.sidercollapsed = !this.state.sidercollapsed;
    }
  }
})


  export default store;
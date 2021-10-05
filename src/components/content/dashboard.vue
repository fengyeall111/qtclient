<template>
  <div  id="dashtable" :class="[collapsed?'close':'open']">
  <a-table :columns="columns" :data-source="data"
    bordered 
    :scroll="{ y:0,x:100}"
   :rowClassName="'dashrow'"
   @change="onChange" />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
const columns = [
  {
    title: '交易所',
    dataIndex: 'exchange',
    width: 100,
  },
  {
    title: '交易对',
    dataIndex: 'symbol',
    width: 100,
  },
  {
    title: '最新成交价',
    dataIndex: 'last',
    width:120,
  },
  {
    title: '最高价',
    dataIndex: 'high',
    width:100,
  },
  {
    title: '最低价',
    dataIndex: 'low',
    width:100,
  },
   {
    title: '平均成交价',
    dataIndex: 'vwap',
  },
  {
    title: '涨跌幅',
    dataIndex: 'percentage',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '交易量',
    dataIndex: 'baseVolume',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'taker',
    dataIndex: 'taker',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'maker',
    dataIndex: 'maker',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  }
];
const data = [
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
  }
];  
 // 根据status动态绑定类名
export default defineComponent({
  setup() {
    const store = useStore();
    const collapsed = computed(() => store.state.sidercollapsed); 
    console.log("collapsed",collapsed.value);
    const onChange = (pagination, filters, sorter) => {
      console.log('params', pagination, filters, sorter);
    };

    return {
      data,
      columns,
      onChange,
      collapsed
    };
  },
});
</script>

<style>
   .open{
       position:fixed;
       left:200px;
       width:auto ;
       font-size:16px;
   }
   .close{
       position:fixed;
       left:80px;
       width:auto ;
       font-size:16px;
   }
   #dashtable {
  padding-left:20px;
  padding-top:20px;
}
.dashrow{
    background-color: rgb(79, 79, 83);
}
#dashtable tr>td { 
    white-space: nowrap; 
    text-align: cnter;
    width:100px;
    padding:10px;
    }
#dashtable tr th { 
    background-color: rgb(79, 79, 83);
    white-space: nowrap; 
    text-align: center;
    width:100px;
    padding:0px;
    }
#dashtable .ant-pagination{
    padding:20px;
    padding-top:0;
}
  
</style>
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello></hello> -->
    <h1>{{title}}</h1>
    <h1 v-text="title"></h1>
    <h1 v-html="title"></h1>
    <input v-bind:placeholder="placeholder" v-on:keyup.enter="doInput" v-model="newStr">
    <ul>
      <li v-for="(item,index) in items" :class="{ finshClass: item.isFinshed}" >
      <!-- <li v-for="(item,index) in items" :class="[isFinshed ? finshClass : '',finshClass]" > -->
      <!-- 'v-for="item in items"' 所以 事件绑定实参必须是item -->
        <p v-on:click="doclick(item,index)">{{item.label}}{{index}}</p>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in items" v-text="item.label" v-bind:class="[className,className2,{finshClass: item.isFinshed}]" v-on:click="doclick(item,index)">
      </li>
    </ul>
    <p>子内容传入：{{zishuo}}</p>
    <mubanName outMsg="吉吉" v-on:zidingyi="zidingDo"></mubanName>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Storage from './storage.js';
import mubanName from './components/componentS';

/*export default {
  name: 'app',
  components: {
    Hello
  }
}*/
export default{
  data: function () {
    return {
      newStr: '',
      click: 'A',
      title: '<span>标签啊</span>我是标题',
      placeholder: '请在此处填写',
      zishuo: '',
      /*items: [
        {
          label: 'eat',
          isFinshed: true
        },
        {
          label: 'sleep',
          isFinshed: false
        }
      ],*/
      items: Storage.fetch(),
      className: 'class1',
      className2: 'class2',
    }
  },
  components: { mubanName },
  watch: {
    //每次数据发生变化都会触发
    items: {
      handler: function (items,old) {
        // console.log(items,old)
        Storage.save(items)
      },
      deep: true
    }
  },
  /*events: {
    'geifuji': function (msg) {
      this.zishuo = msg
    }
  },*/
  methods: /*function ()*/ {
    // 两个ui列表同时渲染的同一个items数据  因改变的是items 所以数据展示效果会同时改变
    doclick: function (ev,index) {
      // console.log(index)
      // console.log(index)
      ev.isFinshed = !ev.isFinshed
      // this.items[index].isFinshed = !this.items[index].isFinshed
    },
    doInput: function() {
      // console.log(this.newStr)
      this.items.push({
        label: this.newStr,
        isFinshed: false
      })
      this.newStr = '';
      // this.$broadcast('Inp', this.items);
    },
    zidingDo: function (msg) {
      this.zishuo = msg
    }
  }
}
</script>

<style>
.class1{
  color: #fa0;
}
.finshClass{
  color: red;
  text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

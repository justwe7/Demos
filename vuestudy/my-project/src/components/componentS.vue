<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p>{{outMsg}}</p>
    <button v-on:click="clickIt">{{say}}</button>
  </div>
</template>

<script>
export default {
  name: 'hello1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      say: '点我啊',
      getFater: ''
    }
  },
  events: {
    'Inp': function (data) {
      console.log(data)
    }
  },
  props: ['outMsg'], //获取父级传入值
  methods: {
    clickIt: function () {
      // alert(this.say)
      // console.log(this.outMsg)
      this.$emit('zidingyi', this.say);
      // this.$dispatch('geifuji', this.say);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

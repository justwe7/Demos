<template>
  <div id="app" class="app">
    <!--<div class="header">
      头部
    </div>-->
    <tmpheader></tmpheader>
    <nav class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评价</div>
      <div class="tab-item">商家</div>
    </nav>
    <div class="content">
      内容
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    components: {
      'tmpheader': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item
        flex: 1
        text-align: center
</style>

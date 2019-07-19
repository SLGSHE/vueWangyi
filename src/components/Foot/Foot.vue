<template>
  <div id="footContainer">
    <nav class="footList">
      <a class="footItem" href="javascript:" @click="goto('/home')">
        <span class="iconfont iconyemian-copy-copy"></span>
        <br />
        <span class="txt">首页</span>
      </a>

      <a class="footItem" href="javascript:" @click="goto('/list')">
        <span class="iconfont iconicon_type"></span>
        <br />
        <span class="txt">分类</span>
      </a>

      <a class="footItem" href="javascript:" @click="goto('/object')">
        <span class="iconfont iconshiwu"></span>
        <br />
        <span class="txt">识物</span>
      </a>

      <a class="footItem" href="javascript:" @click="goto('/shopcart')">
        <span class="iconfont iconqicheqianlian--copy"></span>
        <br />
        <span class="txt">购物车</span>
      </a>

      <a class="footItem" href="javascript:" @click="goto('/person')">
        <span class="iconfont iconrenwu"></span>
        <br />
        <span class="txt">个人</span>
      </a>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    goto(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footContainer
    position fixed
    bottom 0
    left 0
    .footList
      display flex
      width 750px
      height 98px
      background-color pink
      z-index 10
      .footItem
        text-align center
        width 48px
        height 70.97px
        margin 0 51px
        .iconfont
          display inline-block
          width 39.98px
          height 39.98px
          margin 10px 0
        .txt
          display  block
          width 48px
          height  24px
          font-size 24px
          white-space  nowrap


 
</style>
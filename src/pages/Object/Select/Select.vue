<template>
  <div id="objectMap1">
    <!-- 头部 -->
    <div class="mapHeader">
      <div class="mapHeaderContent">
        <a href="javascript:" class="iconfont iconfangzi"></a>
        <div class="mapFind">
          <a class="find" href="javascript:" :class="{active : show}" @click="find">发现</a>
          <a class="selection" href="javascript:" :class="{active:!show}" @click="select">甄选家</a>
        </div>
        <div class="mapHeaderRight">
          <a href="javascript:" class="iconfont iconfangdajing"></a>
          <a href="javascript:" class="iconfont iconqicheqianlian--copy"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    find() {
      if (!this.show) this.show = !this.show;
      this.$router.replace("/object");
    },
    select() {
      this.$router.replace("/select");
      if (this.show) this.show = !this.show;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
    #objectMap1
      position fixed
      top 0
      left 0
      z-index 10
      .mapHeader
      // 个人中心头部
        width 750px
        height 100px
        .mapHeaderContent
          height 100px
          padding 0px 16px 0px 24px
          display flex
          justify-content space-between
          align-items center
          text-align center
          background-color #fafafa
          border-bottom 1px solid #d9d9d9
          border-right 1px solid black
          .iconfangzi
            display inline-block
            // width 48px
            // height 44px
            font-size 46px
          .mapFind
            width 320px
            height 100px
            line-height 100px
            margin-left 40px
            font-size 28px
            a
              &.active
                color #b4282d
                font-weight bold
                font-size 40px
            .find
              padding 0px 16px
            .selection
              color #7f7f7f
          .mapHeaderRight
            width 148px
            height 64px
            display flex
            justify-content space-between
            line-height 64px
            .iconfangdajing
              font-size 50px
            .iconqicheqianlian--copy
              font-size 64px
      

                
 
</style>
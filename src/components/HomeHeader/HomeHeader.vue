<template>
  <div id="homeHeaderContainer">
    <!-- 头部 -->
    <header class="homeHeader">
      <a href="javascript:" class="logo"></a>
      <div class="headerSearch">
        <span class="iconfont iconfangdajing"></span>
        <span class="placeholider">搜索商品，共21768件商品</span>
      </div>
      <div class="homeLogin">登录</div>
    </header>
    <!-- 横向滑动 -->
    <div class="scollNavBar">
      <div class="side-container">
        <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler"></cube-scroll-nav-bar>
      </div>
      <div class="arrow">
        <span class="iconfont iconjiantou"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      current: "推荐",
      labels: [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"
      ]
    };
  },
  methods: {
    changeHandler(cur) {
      this.current = cur;
      console.log(cur);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  #homeHeaderContainer
    position fixed
    top 0
    left 0
    width 100%
    height 147.98px
    // display flex
    background-color #fff
    z-index 10
    .homeHeader
      width 100%
      height 87.97px
      // padding 16px 30px
      display flex
      justify-content center
      align-items center
      // z-index 10
      .logo
        width 138px
        height 39.98px
        display inline-block
        background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
        background-size cover
        background-position  center
        margin-right 20px
      .headerSearch
        width 442.02px
        height 56px
        display flex
        background-color #ededed
        align-items center
        justify-content center
        .iconfont
          width 27.98px
          height 27.98px
          display inline-block
          margin-right 10px
        .placeholider
          color #666
          font-size 27.998px
      .homeLogin
        width 74px
        height 39.98px
        margin-left 16px
        color #b4282d
        font-size 24px
        line-height 39.98px
        text-align center
        border 1px solid #b4282d
    .scollNavBar
      width 750px
      height 60px
      display flex
      // z-index 10
      .side-container
        height 60px
        width 650.02px
        font-size 27.9998px 
        padding-left 30px
        .cube-scroll-nav-bar
           font-size 27.9998px 
           .cube-scroll-wrapper
             font-size 27.9998px 
             .cube-scroll-content
              font-size 27.9998px 
              .cube-scroll-list-wrapper
                font-size 27.9998px 
                .cube-scroll-nav-bar-items
                  font-size 27.9998px 
                  .cube-scroll-nav-bar-item
                    padding 20px 15px 0px 15px
                    font-size 27.9998px 
                    // margin-left 20px
                    span 
                      padding 0 16px
      .arrow
        width 100px
        height 60px
    

        
        


    
    
    
    
    
    
    
    
    
    
      





</style>
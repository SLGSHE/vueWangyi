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
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:" class="swiper-banner">
            <img src="./images/1.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:" class="swiper-banner">
            <img src="./images/2.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:" class="swiper-banner">
            <img src="./images/3.jpg" alt />
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 品牌，退货，退款 -->
    <div class="brand">
      <ul class="brandList">
        <li class="brandItem">
          <span class="iconfont iconwangyi"></span>
          <span class="brandTxt">网易自营品牌</span>
        </li>
        <li class="brandItem">
          <span class="iconfont iconbaozhang"></span>
          <span class="brandTxt">30天无忧退货</span>
        </li>
        <li class="brandItem">
          <span class="iconfont iconqian"></span>
          <span class="brandTxt">48小时快速退款</span>
        </li>
      </ul>
    </div>
    <!-- 新品首发 超级会员等图片列表 -->
    <div class="newProductWraper">
      <ul class="newProductList">
        <li class="newProductItem">
          <a href="javascript:" class="newProductA">
            <img
              class="newProductImg"
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            />
            <span class="newProductTxt">新品首发</span>
          </a>
        </li>
        <li class="newProductItem">
          <a href="javascript:" class="newProductA">
            <img
              class="newProductImg"
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            />
            <span class="newProductTxt">居家生活</span>
          </a>
        </li>
        <li class="newProductItem">
          <a href="javascript:" class="newProductA">
            <img
              class="newProductImg"
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            />
            <span class="newProductTxt">服饰鞋包</span>
          </a>
        </li>
        <li class="newProductItem">
          <a href="javascript:" class="newProductA">
            <img
              class="newProductImg"
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            />
            <span class="newProductTxt">美食酒水</span>
          </a>
        </li>
        <li class="newProductItem">
          <a href="javascript:" class="newProductA">
            <img
              class="newProductImg"
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            />
            <span class="newProductTxt">个护清洁</span>
          </a>
        </li>
        <li class="newProductItem">
          <a href="javascript:" class="newProductA">
            <img
              class="newProductImg"
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            />
            <span class="newProductTxt">母婴亲子</span>
          </a>
        </li>
        <li class="newProductItem">
          <a href="javascript:" class="newProductA">
            <img
              class="newProductImg"
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            />
            <span class="newProductTxt">运动旅行</span>
          </a>
        </li>
        <li class="newProductItem">
          <a href="javascript:" class="newProductA">
            <img
              class="newProductImg"
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            />
            <span class="newProductTxt">数码家电</span>
          </a>
        </li>
        <li class="newProductItem">
          <a href="javascript:" class="newProductA">
            <img
              class="newProductImg"
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            />
            <span class="newProductTxt">全球特色</span>
          </a>
        </li>
        <li class="newProductItem">
          <a href="javascript:" class="newProductA">
            <img
              class="newProductImg"
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            />
            <span class="newProductTxt">超级会员</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 网易员工精选 -->
    <div class="neteaseStaffSelection">
      <a href="javascript:" class="neteaseStaffSelection-A">
        <img
          class="neteaseStaffSelection-Img"
          src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif"
        />
      </a>
    </div>
    <!-- 商品购物指南模块 -->
    <div class="shopGuideModule"></div>
    <div class="shopGuideModule"></div>
    <div class="shopGuideModule"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
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
  },
  mounted() {
    new Swiper(".swiper-container", {
      //direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  #homeHeaderContainer
    position relative
    top 0
    left 0
    width 100%
    height 147.98px
    // display flex
    .homeHeader
      width 100%
      height 87.97px
      // padding 16px 30px
      display flex
      justify-content center
      align-items center
      z-index 10
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
      z-index 10
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
                    font-size 27.9998px 
                    // margin-left 20px
                    span 
                      padding 0 16px
      .arrow
        width 100px
        height 60px
    .swiper-container
      width 750px 
      height 400px
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .swiper-banner
            width 100%
            height 100%
            img 
              width 100%
              height 100%
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
    .brand
      // 品牌
      width 750px
      height 72.04px
      font-size 24.0128px
      .brandList
        width 750px
        height 72.04px
        padding 0 30px
        display flex
        box-sizing border-box
        align-items center
        justify-content center
        .brandItem
          width 227.9px
          height 36.2px
          vertical-align middle
          .iconfont
            width 32px
            height 32px
            vertical-align middle
          .brandTxt
            width 144px
            height 32px
            display inline-block
            vertical-align middle
            white-space nowrap
            padding-left 8px
            line-height 32px
            color #333
    .newProductWraper
      // 新品首发超级会员等图片列表
      width 750px
      height 373.16px
      .newProductList
        width 750px
        height 341.15px
        padding-bottom 32px
        .newProductItem
          width 110px
          height 156px
          margin 10px 20px 9px 20px
          float left
          .newProductA
            width 110px
            height 156px
            display block
            .newProductImg
              width 110px
              height 110px
              display block
            .newProductTxt
              font-size 24.0128px
              color #333
              margin-top 10px
    .neteaseStaffSelection
    // 网易员工精选
      width 750px
      height 126.73px
      .neteaseStaffSelection-A
        display block
        width 750px
        height 126.73px
        .neteaseStaffSelection-Img
          width 100%
    .shopGuideModule
    // 商品购物指南模块
      width 750px
      height 576.24px
      background-color #bfa

        
        


    
    
    
    
    
    
    
    
    
    
      





</style>
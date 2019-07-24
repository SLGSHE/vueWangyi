<template>
  <div id="homeContent">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:" class="swiper-banner">
            <img src="../HomeContent/images/1.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:" class="swiper-banner">
            <img src="../HomeContent/images/2.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:" class="swiper-banner">
            <img src="../HomeContent/images/3.jpg" alt />
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
        <li class="newProductItem" v-for="(item,index) in newProductArr" :key="index">
          <a href="javascript:" class="newProductA">
            <img class="newProductImg" :src="item.picUrl" />
            <span class="newProductTxt">{{item.text}}</span>
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
    <div class="shopGuideModule">
      <ul class="shopGuideModuleList">
        <li class="shopGuideModuleItem">
          <a href="javascript:" class="shopGuideModuleItemBanner">
            <div class="shopGuideModuleItemBannerTitle">9.9超值专区首发</div>
            <div class="desc">180款爆品新定价</div>
            <div class="picList">
              <img
                class="pic"
                src="http://yanxuan.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75"
              />
              <img
                class="pic"
                src="http://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75"
              />
            </div>
          </a>
        </li>
        <li class="shopGuideModuleItem">
          <a href="javascript:" class="shopGuideModuleItemBanner">
            <div class="shopGuideModuleItemBannerTitle">9.9超值专区首发</div>
            <div class="desc">180款爆品新定价</div>
            <div class="picList">
              <img
                class="pic"
                src="http://yanxuan.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75"
              />
              <img
                class="pic"
                src="http://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75"
              />
            </div>
          </a>
        </li>
        <li class="shopGuideModuleItem">
          <a href="javascript:" class="shopGuideModuleItemBanner">
            <div class="shopGuideModuleItemBannerTitle">9.9超值专区首发</div>
            <div class="desc">180款爆品新定价</div>
            <div class="picList">
              <img
                class="pic"
                src="http://yanxuan.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75"
              />
              <img
                class="pic"
                src="http://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75"
              />
            </div>
          </a>
        </li>
        <li class="shopGuideModuleItem">
          <a href="javascript:" class="shopGuideModuleItemBanner">
            <div class="shopGuideModuleItemBannerTitle">9.9超值专区首发</div>
            <div class="desc">180款爆品新定价</div>
            <div class="picList">
              <img
                class="pic"
                src="http://yanxuan.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75"
              />
              <img
                class="pic"
                src="http://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75"
              />
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 私人定制 -->
    <div class="personModule">
      <div class="moduleTitle">
        <div class="moduleTitleLeft">
          <span class="moduleTitleLeftTxt">私人定制</span>
        </div>
      </div>
      <div class="personModuleWrapper swiper-container">
        <div class="swiper-wrapper personWrapperList">
          <!-- 每一个轮播的区域 -->
          <div class="personSwiper-slide swiper-slide">
            <ul class="personBannerList">
              <!-- 每个区域有三份图片 -->
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/f9106a04b711aa69c3ecb4015ed7b609.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/b2a64915d5a9ae04964de87901f284eb.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/79fb28d0a101f704d2fa3665273dbc1a.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="personSwiper-slide swiper-slide">
            <ul class="personBannerList">
              <!-- 每个区域有三份图片 -->
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/f9106a04b711aa69c3ecb4015ed7b609.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/b2a64915d5a9ae04964de87901f284eb.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/79fb28d0a101f704d2fa3665273dbc1a.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="personSwiper-slide swiper-slide">
            <ul class="personBannerList">
              <!-- 每个区域有三份图片 -->
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/f9106a04b711aa69c3ecb4015ed7b609.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/b2a64915d5a9ae04964de87901f284eb.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="personSwiper-slide swiper-slide">
            <ul class="personBannerList">
              <!-- 每个区域有三份图片 -->
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/f9106a04b711aa69c3ecb4015ed7b609.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/d3fdafc1abe1b0835c72339a554c0281.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
              <li class="personBannerItem">
                <a href="javascript:" class="personItemA">
                  <img
                    class="personItemImg"
                    src="https://yanxuan.nosdn.127.net/9e0a5f2b18d2b92e51f96c025fc12850.png?imageView&quality=65&thumbnail=330x330"
                  />
                  <span class="personItemTitle">男/女 色画轻主义人字凉...</span>
                  <span class="personItemPrice">￥100</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--限时购 -->
    <div class="fashionSaleModule">
      <div class="saleModuleTitle">
        <!-- 左 -->
        <div class="saleShop">
          <div class="saleShopLeft">
            <span>限时购</span>
          </div>
          <div class="saleShopRight">
            <span class="saleHours">01</span>
            <span class="saleColon">:</span>
            <span class="saleMins">53</span>
            <span class="saleColon">:</span>
            <span class="saleSecs">04</span>
          </div>
        </div>
        <div class="saleMore">
          <span class="saleMoreTxt">更多</span>
          <i class="iconfont iconarrow-right"></i>
        </div>
      </div>
    </div>
    <!-- 底部版权区 -->
    <div class="footWraper">
      <div class="footWraperContent">
        <div class="bd">
          <a href="javascript:" class="goApp">下载APP</a>
          <a href="javascript:" class="goWeb">电脑版</a>
        </div>
        <p class="copyRight">
          <span>网易公司版权所有 © 1997-</span>
          <span>2019</span>
          <br />
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { reqHomeData } from "../../api/index";
export default {
  data() {
    return {
      newProductArr: [], //商品导航
      personalShop: [] //私人订制
    };
  },
  async mounted() {
    new Swiper(".swiper-container", {
      //direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    new Swiper("personModuleWrapper", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });

    const result = await reqHomeData();
    this.newProductArr = result.data.kingKongModule.kingKongList;
    this.personalShop = result.data.personalShop;
    console.log(this.personalShop);
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  #homeContent
    padding-top 148.03px
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
      // box-sizing border-box
      margin-bottom 20px
      .shopGuideModuleList
        // padding 10px 30px 30px 26px
        .shopGuideModuleItem
          float left
          margin 5px
          // width 750px
          .shopGuideModuleItemBanner
            width 343.18px
            height 263.14px
            display block
            background-color #F5F5F5
            padding 20px 0px 0px 20px
            // background-image url('https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75')
            // background-size 100% 100%
            .shopGuideModuleItemBannerTitle
              color #333
              font-size 32.0173px
              padding-left 10px
              font-family PingFangSC-Medium
              margin-bottom 10px
            .desc
              color #7f7f7f
              font-size 24.0128px
              padding-left 10px
            .picList
              width 100%
              .pic 
                width 150px
                height 150px
                float left
                margin-right 4px
    .personModule
    // 私人定制
      width 750px
      height 470px
      margin-bottom 20px
      background-color #fff
      .moduleTitle
        width 750px
        height 100px
        box-sizing border-box
        padding 0px 30px
        .moduleTitleLeft
          float left
          width 128px
          height 100px
          font-size 32.0173px
          line-height 100px
          .moduleTitleLeftTxt
            text-align center
            white-space nowrap
      .personModuleWrapper
        width 750px 
        height 370px
        .personWrapperList
          width 100%
          height 100%
          .personSwiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .personBannerList
              .personBannerItem
                width 216px
                height 300px
                float left
                margin-right 15px
                .personItemA
                  display block
                  width 216px
                  height 300px
                  font-size 24.0148px
                  .personItemImg
                    width 216px
                    height 216px
                    background-color #f5f5f5
                    margin-bottom 5px
                  .personItemPrice
                    color #b4282d
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774  
    .fashionSaleModule
    // 限时购
      width 750px
      height 699.5px
      background-color pink
      box-sizing border-box
      .saleModuleTitle
        height 100px
        background-color green
        padding 0px 30px
        line-height 100px
        // overflow hidden
        .saleShop
          width 289px
          height 100.76px
          background-color pink
          float left
          .saleShopLeft
            width 96px
            height 41px
            color #333
            font-size 32.0173px
            white-space nowrap
            float left
          .saleShopRight
            width 181.6px
            height 100px
            background-color red
            float right
            vertical-align middle
            .saleHours
              width 36px
              height 36px
              display inline-block
              background-color #333
              color #fff
              font-size 24.0128px
              line-height 36px
              text-align center
        .saleMore
          width 77.04px
          height 100px
          background-color red
          float right
          display flex
          .saleMoreTxt
            font-size 28.0147px
            white-space nowrap
          .iconarrow-right
            display inline-block
            vertical-align middle
            width 13px
            height 23.01px
            font-size 14px
    .footWraper
    // 底部版权区
      width 750px
      height 245.08px
      background-color #414141
      border-top 1px solid rgba(0,0,0,.15)
      text-align center
      padding-bottom 98px
      .footWraperContent
        box-sizing border-box
        // height 244.08px
        width 100%
        padding 54px 20px 28px 20px
        margin-right auto
        margin-left auto
        .bd
          width 710px
          height 62px
          margin-bottom 36px
          .goApp
            display inline-block
            width 172px
            height 62px
            line-height 62px
            border 1px solid #999
            color #fff
            font-size 24.0128px
            margin-right 50px
          .goWeb
            display inline-block
            width 172px
            height 62px
            line-height 62px
            border 1px solid #999
            color #fff
            font-size 24.0128px
        .copyRight
          width 710px
          height 64px
          font-size 24.0128px
          color #fff
         
          

 
</style>
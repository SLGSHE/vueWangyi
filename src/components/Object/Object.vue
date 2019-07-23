<template>
  <div id="objectMap">
    <div class="objectMapHeader">
      <!-- 头部 -->
      <div class="mapHeader">
        <div class="mapHeaderContent">
          <a href="javascript:" class="iconfont iconfangzi"></a>
          <div class="mapFind">
            <a class="find" href="javascript:">发现</a>
            <a class="selection" href="javascript:">甄选家</a>
          </div>
          <div class="mapHeaderRight">
            <a href="javascript:" class="iconfont iconfangdajing"></a>
            <a href="javascript:" class="iconfont iconqicheqianlian--copy"></a>
          </div>
        </div>
      </div>
      <!-- 头部滑动 -->
      <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
    </div>
    <!-- 内容区 -->
    <div class="objectMapContent">
      <div class="mainContent">
        <div class="mainContentItem">
          <a href="javascript:" class="flexbox">
            <div class="info">
              <div class="name">
                <span class="ava">
                  <img
                    src="https://yanxuan.nosdn.127.net/8720248cc1f62d279f004b8a5124f811.jpg?imageView&quality=65&thumbnail=56y56"
                  />
                </span>
                <span>网易味央：小周</span>
              </div>
              <div class="title">一次吃遍8种坚果，零食之王要这样吃才对</div>
              <div class="desc">鲜粹每日坚果</div>
              <div class="rcount">
                <i class="iconfont iconwangjimima-copy"></i>
                <span>8508人看过</span>
              </div>
            </div>
            <div class="pic">
              <img
                src="https://yanxuan.nosdn.127.net/c0359f2f05aaee841da5dc09bfa23362.jpg?imageView&quality=65&thumbnail=272y272"
              />
            </div>
          </a>
        </div>
        <div class="mainContentItem">
          <a href="javascript:" class="flexbox">
            <div class="info">
              <div class="name">
                <span class="ava">
                  <img
                    src="https://yanxuan.nosdn.127.net/8720248cc1f62d279f004b8a5124f811.jpg?imageView&quality=65&thumbnail=56y56"
                  />
                </span>
                <span>网易味央：小周</span>
              </div>
              <div class="title">一次吃遍8种坚果，零食之王要这样吃才对</div>
              <div class="desc">鲜粹每日坚果</div>
              <div class="rcount">
                <i class="iconfont iconwangjimima-copy"></i>
                <span>8508人看过</span>
              </div>
            </div>
            <div class="pic">
              <img
                src="https://yanxuan.nosdn.127.net/c0359f2f05aaee841da5dc09bfa23362.jpg?imageView&quality=65&thumbnail=272y272"
              />
            </div>
          </a>
        </div>
        <div class="bigImg">
          <a href="javascript">
            <div class="bigImgName">
              <span class="ava">
                <img
                  src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56"
                />
              </span>
              <span class="bigNameTxt">选妹</span>
            </div>
            <div class="bigImgTitle">常年断货的严选爆品终于上架了，回头客都在抢！</div>
            <div class="bigImgPic">
              <img
                src="https://yanxuan.nosdn.127.net/6f5e7bb94350b7eed05134a9b1d83200.jpg?imageView&quality=65&thumbnail=690y376"
              />
            </div>
            <div class="rcount">
              <i class="iconfont iconwangjimima-copy"></i>
              <span>82万人看过</span>
            </div>
          </a>
        </div>
        <div class="mainContentItem">
          <a href="javascript:" class="flexbox">
            <div class="info">
              <div class="name">
                <span class="ava">
                  <img
                    src="https://yanxuan.nosdn.127.net/8720248cc1f62d279f004b8a5124f811.jpg?imageView&quality=65&thumbnail=56y56"
                  />
                </span>
                <span>网易味央：小周</span>
              </div>
              <div class="title">一次吃遍8种坚果，零食之王要这样吃才对</div>
              <div class="desc">鲜粹每日坚果</div>
              <div class="rcount">
                <i class="iconfont iconwangjimima-copy"></i>
                <span>8508人看过</span>
              </div>
            </div>
            <div class="pic">
              <img
                src="https://yanxuan.nosdn.127.net/c0359f2f05aaee841da5dc09bfa23362.jpg?imageView&quality=65&thumbnail=272y272"
              />
            </div>
          </a>
        </div>
        <div class="mainContentItem">
          <a href="javascript:" class="flexbox">
            <div class="info">
              <div class="name">
                <span class="ava">
                  <img
                    src="https://yanxuan.nosdn.127.net/8720248cc1f62d279f004b8a5124f811.jpg?imageView&quality=65&thumbnail=56y56"
                  />
                </span>
                <span>网易味央：小周</span>
              </div>
              <div class="title">一次吃遍8种坚果，零食之王要这样吃才对</div>
              <div class="desc">鲜粹每日坚果</div>
              <div class="rcount">
                <i class="iconfont iconwangjimima-copy"></i>
                <span>8508人看过</span>
              </div>
            </div>
            <div class="pic">
              <img
                src="https://yanxuan.nosdn.127.net/c0359f2f05aaee841da5dc09bfa23362.jpg?imageView&quality=65&thumbnail=272y272"
              />
            </div>
          </a>
        </div>
        <div class="bigImg">
          <a href="javascript">
            <div class="bigImgName">
              <span class="ava">
                <img
                  src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56"
                />
              </span>
              <span class="bigNameTxt">选妹</span>
            </div>
            <div class="bigImgTitle">常年断货的严选爆品终于上架了，回头客都在抢！</div>
            <div class="bigImgPic">
              <img
                src="https://yanxuan.nosdn.127.net/6f5e7bb94350b7eed05134a9b1d83200.jpg?imageView&quality=65&thumbnail=690y376"
              />
            </div>
            <div class="rcount">
              <i class="iconfont iconwangjimima-copy"></i>
              <span>82万人看过</span>
            </div>
          </a>
        </div>
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
        "好货内部价",
        "回购榜",
        "晒单",
        "开发者日记",
        "达人",
        "HOME"
      ]
    };
  },
  methods: {
    changeHandler(cur) {
      this.current = cur;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  #objectMap
    width 750px
    height 2000px
    background-color #FAFAFA
    .objectMapHeader
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
            .find
              color #b4282d
              padding 0px 16px
              font-weight bold
              font-size 40px
            .selection
              color #b4282d
              font-size 28px
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
      .cube-scroll-nav-bar
      // 头部滑动
        height 92px
        box-sizing border-box
        padding-bottom 20px
        .cube-scroll-content
          min-width 100%
          height 92px
          .cube-scroll-list-wrapper
            height 100%
            .cube-scroll-nav-bar-items
              height 100%
              background-color #FAFAFA
              border-bottom 1px solid black
              .cube-scroll-nav-bar-item
                font-size 28px
                padding 0px
                span 
                  padding 0px 20px 
                  margin 0px 8px
                  line-height 72px
    .objectMapContent
    // 内容区
      width 750px
      height 2000px
      .mainContent
        padding-top 192px
        box-sizing border-box
        .mainContentItem
          height 336px
          background-color #fff
          padding 32px 30px 
          margin 20px 0px
          .flexbox
            display flex
            width 690px
            height 272px
            justify-content space-between
            .info 
              width 400px
              height 272px
              text-align left
              .name 
                height 56px
                color #333
                font-size 28px
                .ava
                  margin-right 12px
                  float left
                  img
                    width 54px
                    height 54px
                    border-radius 50%
                span
                  float left
                  line-height 59px
              .title
                font-size 36px
                padding-top 32px
                color #333
                line-height 36px
              .desc
                font-size 28px
                color #7f7f7f
                white-space nowrap
                text-overflow ellipsis
                padding-top 16px
              .rcount
                .iconwangjimima-copy
                  font-size 26px
                  margin-right 8px
                span  
                  font-size 22px
                  color #999
            .pic
              width 272px
              height 272px
              background-color skyblue
              img   
                display block
                width 100%
                height 100%
        .bigImg
          height 675px 
          background-color #fff
          padding 36px 30px
          margin 20px 0px
          text-align left
          .bigImgName
            height 56px
            font-size 28px
            color #333
            line-height: 56px
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
            .ava  
              width 56px
              height 56px
              margin-right 12px
              img   
                width 54px
                height 54px
                border-radius 50%
                vertical-align middle
            .bigNameTxt 
              height 56px
              display inline-block
              line-height 56px
          .bigImgTitle
            font-size 36px
            color #333
            margin 8px 0px 16px 0px
          .bigImgPic
            width 690px
            height 376px
            margin-bottom 20px
            img   
              width 100%
              height 100%
          .rcount
            .iconwangjimima-copy
              margin-right 8px
            span  
              font-size 22px
              color #999
              vertical-align middle

                
 
</style>
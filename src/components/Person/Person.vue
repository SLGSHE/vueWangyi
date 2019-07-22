<template>
  <div id="PersonContainer">
    <!-- 个人中心头部 -->
    <div class="personHeader">
      <div class="personHeaderContent">
        <a href="javascript:" class="iconfont iconfangzi"></a>
        <a href="javascript:" class="personImage"></a>
        <div class="personHeaderRight">
          <a href="javascript:" class="iconfont iconfangdajing"></a>
          <a href="javascript:" class="iconfont iconqicheqianlian--copy"></a>
        </div>
      </div>
    </div>
    <!-- 个人中心主体 -->
    <div class="personLoginType">
      <div class="cont">
        <div class="logWrap">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
        </div>
        <div class="btnWrap">
          <div class="phoneLogin">
            <i class="iconfont iconshouji"></i>
            <span class="phoneLoginTxt">手机号码登录</span>
          </div>
          <div class="mailboxLogin">
            <i class="iconfont iconyoujian-copy"></i>
            <span class="mailboxLoginTxt">邮箱帐号登录</span>
          </div>
          <div class="phoneRegister">
            <span class="phoneRegisteTxt">手机号快捷注册</span>
            <i class="iconfont iconarrow-right"></i>
          </div>
        </div>
      </div>
      <div class="thirdWrap">
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont iconweixin"></i>
            <span>微信</span>
          </span>
        </div>
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont iconqq"></i>
            <span>QQ</span>
          </span>
        </div>
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont iconweibo"></i>
            <span>微博</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 个人中心
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #PersonContainer
    width 750px
    height 1336px
    .personHeader
    // 个人中心头部
      width 750px
      height 86px
      .personHeaderContent
        widht 750px
        height 88px
        padding 0px 16px 0px 24px
        display flex
        justify-content space-between
        align-items center
        .iconfangzi
          display inline-block
          // width 48px
          // height 44px
          font-size 56px
        .personImage 
          width 172px
          height 54px
          background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
          background-repeat no-repeat
          background-size 96%
          margin-left 80px
        .personHeaderRight
          width 148px
          height 64px
          display flex
          justify-content space-between
          .iconfangdajing
            font-size 64px
          .iconqicheqianlian--copy
            font-size 64px
    .personLoginType
    // 个人中心登录主体
      width 750px
      height 1248px
      background-color #F2F5F4
      .cont
        width 750px
        height 700px
        .logWrap
          width 750px
          height 410px
          box-sizing border-box
          padding 80px 0px
          line-height 330px
          img 
            width 268px
            height 90px
        .btnWrap
          box-sizing border-box
          width 750px
          height 292px
          padding 0px 40px
          margin-bottom 204px
          .phoneLogin
            width 670px
            height 94px
            background-color red
            margin-bottom 32px
            color #fff
            line-height 94px
            .iconshouji
              font-size 40px
              margin-right 16px 
            .phoneLoginTxt
              font-size 28px
              vertical-align middle
          .mailboxLogin
            width 670px
            height 94px
            border 2px solid #b4282d
            color #b4282d
            margin-bottom 32px
            line-height 94px
            .iconyoujian-copy
              font-size 40px
              margin-right 16px
            .mailboxLoginTxt
              font-size 28px
              vertical-align middle
          .phoneRegister
            width 670px
            height 42px
            line-height 42px
            .phoneRegisteTxt
              font-size 28px
              color #333
            .iconarrow-right
              font-size 28px
      .thirdWrap
        width 750px
        height 40px
        background #bfa
        position absolute
        left 0px
        bottom 104px
        .itemWrap
          display inline-block
          height 40px
          border-right 2px solid #979797
          font-size 28px
          color #7f7f7f
          text-align center
          padding 0px 40px
          vertical-align middle
          .item
            .iconfont 
              padding-right 4px
 
</style>
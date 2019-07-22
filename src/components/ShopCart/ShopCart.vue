<template>
  <div id="shopCartContainer">
    <div class="shopCartHeader">
      <div class="shopCartTop">
        <div class="shopCartTopContent">
          <div class="shopCartTopLeft">购物车</div>
          <div class="shopCartTopRight">
            <a href="javascript:">领卷</a>
          </div>
        </div>
      </div>
      <div class="shopCartHeaderTitle">
        <ul class="shopCartHeaderTitleList">
          <li class="shopCartItem">
            <i class="iconfont"></i>
            <span>30天无忧退货</span>
          </li>
          <li class="shopCartItem">
            <i class="iconfont"></i>
            <span>48小时快速退款</span>
          </li>
          <li class="shopCartItem">
            <i class="iconfont"></i>
            <span>满88元免邮费</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="shopCart">
        <img />
        <div class="shopCartAdd">去添点什么吧</div>
        <a class="shopCartLogin" href="javascript:">登录</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 购物车组件
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shopCartContainer
    background #f4f4f4;
    .shopCartHeader
      width 750px
      height 150px
      .shopCartTop
        height 88px
        background #fff
        padding 0px 50px 0px 30px
        .shopCartTopContent
          .shopCartTopLeft
            float left
            font-size 36px
            width 108px
            height 88px
            line-height 88px 
          .shopCartTopRight
            float right
            font-size 30px
            width 60px
            height 33px
            line-height 33px
            a
              width 60px
              height 33px
              display inline-block
              color #B4282D
              line-height 33px
              margin 25px 30px 0px 0px
      .shopCartHeaderTitle
        width 100%
        height 70px
        background #eee
        .shopCartHeaderTitleList
          box-sizing border-box
          width 750px
          height 70px
          background #eee
          padding 0px 30px
          display flex
          justify-content space-between
          align-items center
          .shopCartItem
            height 36px
            font-size 24.0128px
            display flex
            align-items center
            span 
              color #666
              white-space nowrap
            .iconfont
              display inline-block
              width 10px
              height 10px
              border 1px solid #fff
              background-color #eee
              border-radius 50%
              margin-right 6px
    .content
      width 750px
      height 470px
      position absolute
      top 0px
      bottom 0px
      margin-top auto
      margin-bottom 300px
      .shopCart
        width 750px
        height 300px
        img 
          width 248px
          height 248px
          background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png')
          background-size 100% 100%
        .shopCartAdd
          color #999
          font-size 28.0147px
        .shopCartLogin
          display inline-block
          width 480px
          height 92px
          background red
          text-align center
          line-height 92px
          color #fff
          margin-top 20px
            

  
</style>
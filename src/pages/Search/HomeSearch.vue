<template>
  <div id="searchContainer">
    <div class="searchContent">
      <div class="hdWraper">
        <div class="searchInput">
          <div class="sinput">
            <i class="iconfont iconfangdajing"></i>
            <input type="text" placeholder="水感多效防晒凝露 SPF30" class="text" />
          </div>
        </div>
        <span class="cancel">取消</span>
      </div>
      <div class="searchList">
        <div class="searchItem">
          <div class="hd">
            <h3 class="tit">热门搜索</h3>
          </div>
          <div class="list">
            <a class="item">夏凉被82折起</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #searchContainer
    height 2000px
    width 100%
    background-color #EEEEEE
    .searchContent
      width 750px
      height 413.88px
      background-color white
      box-sizing border-box
      .hdWraper
        height 87px
        background-color skyblue
        padding 0px 30px
        display flex
        align-items center
        .searchInput
          width 604px
          height 54px
          background-color #F4F4F4
          .sinput
            height 56px
            padding 0px 20px
            font-size 32px
            color #999
            line-height 56px
            text-align left
            .iconfangdajing
              margin-right 16px
            .text
              background-color transparent
        .cancel
          color #333
          font-size 28px
          margin-left 30px
          white-space nowrap
      .searchList
        width 750px
        height 406px
        background pink
        box-sizing border-box
        .searchItem
          height 406px
          padding 0px 30px 30px 
          margin-bottom 20px
          .hd
            height 90px
            font-size 28px
            color #999
            text-align left
            line-height 90px
          .list
            width 720px
            height 318px
            color #333
            font-size 24px
            box-sizing border-box
            .item
              display inline-block
              height 47.6px
              padding 0px 30px 
              margin 0px 64px 64px 0px
              border 1px solid #7f7f7f
              line-height 47.6px

        
          
 
</style>
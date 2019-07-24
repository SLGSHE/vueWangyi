<template>
  <div id="searchContainer">
    <div class="searchContent">
      <div class="hdWraper">
        <div class="searchInput">
          <div class="sinput">
            <i class="iconfont iconfangdajing"></i>
            <input type="text" placeholder="水感多效防晒凝露 SPF30" class="text" ref="clickinput" />
          </div>
        </div>
        <span class="cancel" @click="gohome('/home')">取消</span>
      </div>
      <div class="searchList">
        <div class="searchItem">
          <div class="hd">
            <h3 class="tit">热门搜索</h3>
          </div>
          <div class="list" @click="click">
            <a class="item">夏凉被82折起</a>
            <a class="item">9.9元超值专区</a>
            <a class="item">风扇</a>
            <a class="item">电动牙刷69元起</a>
            <a class="item">男士内裤</a>
            <a class="item">爆款 行李箱</a>
            <a class="item">毛巾</a>
            <a class="item">四季循环扇</a>
            <a class="item">手机壳</a>
            <a class="item">时尚饰品49元起</a>
            <a class="item">行李箱</a>
            <a class="item">水杯</a>
            <!-- <a class="item">{{clickinput}}</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      // clickinput: ""
    };
  },
  methods: {
    gohome(path) {
      this.$router.replace(path);
    },
    click() {
      // console.log(this.clickinput);
      // console.log(this.$refs.clickinput.value);
    }
    // search(event) {
    //   console.log(event.currentTarget.value);
    // }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #searchContainer
    min-height 100%
    width 100%
    .searchContent
      background-color white
      box-sizing border-box
      background-color #fff
      .hdWraper
        height 87px
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
            font-size 28px
            color #999
            line-height 56px
            text-align left
            .iconfangdajing
              margin-right 16px
            .text
              height 40px
              background-color transparent //去除input背景色
              outline none //去除input高亮边框
        .cancel
          color #333
          font-size 28px
          margin-left 30px
          white-space nowrap
      .searchList
        width 750px
        height 406px
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
            // width 720px
            height 318px
            color #333
            font-size 24px
            box-sizing border-box
            text-align left
            .item
              display inline-block
              height 47.6px
              padding 0px 20px 
              margin 0px 44px 34px 0px
              border 1px solid #7f7f7f
              line-height 47.6px
             

        
          
 
</style>
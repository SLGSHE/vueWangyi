<template>
  <div id="PersonContainer">
    <!-- 个人中心头部 -->
    <div class="personHeader" v-show="isShowPersonHeader">
      <div class="personHeaderContent">
        <a href="javascript:" class="iconfont iconfangzi" @click="gohome('/home')"></a>
        <a href="javascript:" class="personImage"></a>
        <div class="personHeaderRight">
          <a href="javascript:" class="iconfont iconfangdajing"></a>
          <a
            href="javascript:"
            class="iconfont iconqicheqianlian--copy"
            @click="goShopCart('/shopCart')"
          ></a>
        </div>
      </div>
    </div>
    <!-- 个人中心主体 -->
    <div class="personLoginType" v-show="isShowPersonLogin">
      <div class="cont">
        <div class="logWrap">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
        </div>
        <div class="btnWrap">
          <!-- 手机号登录 -->
          <div class="phoneLogin" @click="handlePhoneLogin">
            <i class="iconfont iconshouji"></i>
            <span class="phoneLoginTxt">手机号码登录</span>
          </div>
          <!-- 邮箱登录 -->
          <div class="mailboxLogin" @click="handleMailLogin">
            <i class="iconfont iconyoujian-copy"></i>
            <span class="mailboxLoginTxt">邮箱帐号登录</span>
          </div>
          <!-- 手机号快捷注册 -->
          <div class="phoneRegister" @click="handlePhoneRegister">
            <span class="phoneRegisteTxt">手机号快捷注册</span>
            <i class="iconfont iconarrow-right"></i>
          </div>
        </div>
      </div>
      <!-- 微信qq微博 -->
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
    <!-- 各种登录的 -->
    <div class="loginWrap" v-show="loginWrap">
      <!-- 手机号登录界面 -->
      <div class="view" v-show="isShowPhoneLogin">
        <div class="logo">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />>
        </div>
        <div class="ursBox">
          <div class="ursBoxContainer">
            <div class="ursBoxContent">
              <div class="inputBox">
                <input type="tel" placeholder="请输入手机号" class="phone" />
              </div>
              <div class="duanXinLogin">
                <div class="duanXinContent">
                  <input type="text" placeholder="请输入短信验证码" class="duanxin" />
                  <div class="getDuanXin">获取验证码</div>
                </div>
              </div>
              <div class="login">
                <div class="loginWenTi">
                  <span class="wenTiLeft">遇到问题</span>
                  <span class="wenTiRight">使用密码验证登录</span>
                </div>
                <div class="reqLogin">登录</div>
              </div>
            </div>
          </div>
        </div>
        <div class="newLogin">
          <div class="qiTaLogin" @click="goPerson">其它登录方式</div>
          <div class="register">
            <span>注册账号</span>
            <i class="iconfont iconarrow-right"></i>
          </div>
        </div>
      </div>
      <!-- 邮箱号登录界面 -->
      <div class="view" v-show="isShowMailLogin">
        <div class="logo">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />>
        </div>
        <div class="ursBox">
          <div class="ursBoxContainer">
            <div class="ursBoxContent">
              <div class="inputBox">
                <input type="tel" placeholder="邮箱账号" class="phone" />
              </div>
              <div class="duanXinLogin">
                <div class="duanXinContent">
                  <input type="text" placeholder="密码" class="duanxin" />
                </div>
              </div>
              <div class="login">
                <div class="loginWenTi">
                  <span class="wenTiLeft">注册账号</span>
                  <span class="wenTiRight">忘记密码</span>
                </div>
                <div class="reqLogin">登录</div>
              </div>
            </div>
          </div>
        </div>
        <div class="newLogin">
          <div class="qiTaLogin" @click="goPerson">其它登录方式</div>
        </div>
      </div>
      <!-- 手机号注册 -->
      <div class="view phoneRegister" v-show="isShowPhoneRegister">
        <div class="logo">手机号注册</div>
        <div class="ursBox">
          <div class="ursBoxContainer">
            <div class="ursBoxContent">
              <div class="inputBox">
                <input type="tel" placeholder="请输入手机号" class="phone" />
              </div>
              <div class="duanXinLogin">
                <div class="duanXinContent">
                  <input type="text" placeholder="请输入短信验证码" class="duanxin" />
                  <div class="getDuanXin">获取验证码</div>
                </div>
              </div>
              <div class="login">
                <div class="inputBox">
                  <input type="tel" placeholder="请输入密码" class="phone pwd" />
                </div>
                <div class="reqLogin">注册</div>
              </div>
            </div>
          </div>
        </div>
        <div class="newLogin">
          <div class="qiTaLogin">
            <input type="checkbox" class="checkbox" />
            <span>我同意</span>
            <a href="https://reg.163.com/agreement_mobile.shtml" target="_blank">《服务条款》</a>
            <span>和</span>
            <a href="https://reg.163.com/agreement_mobile_ysbh.shtml" target="_blank">《网易隐私政策》</a>
          </div>
          <div class="register" @click="goMailReg">
            <span>邮箱账号注册</span>
            <i class="iconfont iconarrow-right"></i>
          </div>
        </div>
      </div>
      <!-- 邮箱号注册 -->
      <div class="mailReg" v-show="isShowMailRegisster">
        <div class="maRegCon">
          <form class="form">
            <div class="mipt">
              <div class="miptLeft">
                <input type="text" class="leftText" placeholder="6-18位字母数字组合" />
              </div>
              <div class="miptRight">
                <span>@163.com</span>
                <i class="iconfont iconjiantou"></i>
              </div>
            </div>
            <div class="uipt">
              <div class="uiptLeft">
                <input type="text" class="input" placeholder="6-16位字母数字字符组合密码" />
              </div>
              <div class="uiptRight">
                <span class="iconfont iconyanjing"></span>
              </div>
            </div>
            <div class="verification">
              <span class="iconfont iconsanjiaoxing"></span>
              <span class="txt">点此进行验证</span>
            </div>
            <div class="next">下一步</div>
            <div class="tipss">
              <input type="checkbox" />
              <span>用户注册即代表同意</span>
              <a href="https://reg.163.com/agreement_wap.shtml?20160825" target="_blank">《服务条款》</a>
              <span>和</span>
              <a
                href="https://reg.163.com/agreement_game_wap.shtml?20160825"
                target="_blank"
              >《网易隐私政策》</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 个人中心
export default {
  data() {
    return {
      isShowPersonLogin: true, //是否显示个人中心
      isShowPhoneLogin: false, //是否手机号登录
      isShowMailLogin: false, //是否邮箱登录
      isShowPhoneRegister: false, //手机号注册
      isShowMailRegisster: false, //邮箱账号注册
      isShowPersonHeader: true, //个人中西头部
      loginWrap: false
    };
  },
  methods: {
    handlePhoneLogin() {
      //点击手机号登录
      this.isShowPersonLogin = false; //个人中心关闭
      this.isShowPhoneLogin = true; //手机号登录显示
      this.loginWrap = true;
    },
    handleMailLogin() {
      //点击邮箱登录
      this.isShowPersonLogin = false; //个人中心关闭
      this.isShowMailLogin = true; // 邮箱登录显示
      this.loginWrap = true;
    },
    handlePhoneRegister() {
      //点击手机号快捷注册界面
      this.isShowPersonLogin = false; //个人中心关闭
      this.isShowPhoneRegister = true; //手机号注册开启
      this.loginWrap = true;
    },
    goMailReg() {
      //点击去邮箱账号注册界面
      this.isShowPhoneRegister = false; //手机号注册界面关闭
      this.isShowMailRegisster = true; //邮箱账号注册界面显示
      this.isShowPersonHeader = false; //个人中心头部关闭
      this.isShowPersonLogin = false; //个人中心关闭
    },
    goPerson() {
      //点击区个人中心
      this.isShowPersonLogin = true; //个人中心显示
      this.isShowMailLogin = false; //邮箱号登录关闭
      this.isShowPhoneLogin = false; //手机号登录关闭
      this.isShowMailRegisster = false; //邮箱账号注册
      this.loginWrap = false;
    },
    gohome(path) {
      //点击回主页
      console.log(this);
      // this.$route.path(path)
      this.$router.replace(path);
    },
    goShopCart(path) {
      //点击去购物车界面
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #PersonContainer
    width 750px
    height 1336px
    .personHeader
    // 个人中心头部
      width 750px
      height 86px
      background-color #FAFAFA
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
            background-color #b4282d
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
    .loginWrap
    //  各种登录
      height 900px
      box-sizing border-box
      .view
        width 750px
        height 842px
        .logo
          width 750px
          height 64px
          margin-top 56px
          text-align center
          img 
            width 192px
            height 64px
        .ursBox
          height 574px
          margin-top 40px
          padding 0px 40px
          .ursBoxContainer
            height 574px
            .ursBoxContent
              box-sizing border-box
              height 514px
              padding-top 104px
              .inputBox
                height 94px
                font-size 28px
                color #666
                text-align left
                border-bottom 1px solid #7f7f7f
                .phone
                  width 600px
                  height 42px
                  margin 28px 0px
              .duanXinLogin
                width 670px
                height 90px
                border-bottom 1px solid #7f7f7f
                margin-top 30px
                text-align left
                .duanXinContent
                  display flex
                  font-size 28px
                  .duanxin
                    width 280px
                    height 42px
                    margin-right 180px
                    margin-top 10px
                  .getDuanXin
                    width 168px
                    height 58px
                    border 1px solid #7f7f7f
                    color #333
                    font-size 28px
                    line-height 58px
              .login
                height 240px
                .loginWenTi
                  display flex
                  justify-content space-between
                  padding 40px 0px
                  .wenTiLeft
                    font-size 24px
                  .wenTiRight
                    font-size 28px
              .reqLogin
                height 90px
                border 1px solid #b42b2d
                font-size 28px
                color #ffffff
                background-color #b42b2d
                line-height 90px
        .newLogin
          height 166px
          padding 0px 40px
          font-size 28px
          .qiTaLogin
            height 94px
            border 1px solid #b42b2d
            color #b42b2d
            line-height 94px
          .register
            line-height 36px
            .iconarrow-right
              font-size 26px
      .phoneRegister
        //手机号注册
        color #333
        font-size 36px
        .ursBox
          .ursBoxContainer
            .login
              margin-bottom 0px
        .newLogin
          height 80px
          margin-top -40px
          font-size 24px
          .qiTaLogin
            height 40px
            line-height 40px
            border 0px
            text-align left
            color #7f7f7f
            .checkbox
              display inline-block
              width 28px
              height 28px
              vertical-align middle
              margin-right 8px
            a
              color #007AFF
          .register
            margin-top 56px
            font-size 28px
      .mailReg
        //邮箱号注册
        height 770px
        .maRegCon
          box-sizing border-box
          height 770px
          padding 64px  0px 
          margin  0px 52px
          .form
            width 644px
            height 400px
            font-size 30px
            color #333
            .mipt
              width 644px
              height 140px
              display flex
              justify-content space-between
              .miptLeft
                width 368px
                height 100px
                border 1px solid #7f7f7f
                .leftText
                  width 100%
                  height 100%
                  text-align center
              .miptRight
                width 250px
                height 100px
                border 1px solid #7f7f7f
                font-weight bold
                text-align center
                line-height 100px
                .iconfont
                  margin-left 10px
            .uipt 
              width 644px
              height 100px
              border 1px solid #7f7f7f
              display flex
              justify-content space-between
              .uiptLeft
                width 644px
                height 100px
                text-align left
                box-sizing border-box
                .input
                  width 100%
                  height 100%
                  padding-left 30px
              .uiptRight
                width 90px
                height 100px
                line-height 100px
                span 
                  width 60px 
                  height 60px
                  font-size 50px
            .verification
              width 100%
              height 84px
              background-color #9CC1E5
              margin-top 40px
              line-height 84px
              .iconfont
                margin-right 10px
                color blue
            .next
              height 100px
              line-height 100px
              background-color #b7272d
              color #fff
              margin-top 20px
            .tipss
              height 80px
              color #999
              font-size 30px
              text-align left
              margin-top 30px
              a
                color #0095ff
                 
                


 
</style>
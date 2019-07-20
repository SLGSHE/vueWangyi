<template>
  <div id="Home">
    <homeheader />
    <homecontent />
  </div>
</template>

<script type="text/ecmascript-6">
import homeheader from "../../components/HomeHeader/HomeHeader.vue";
import homecontent from "../../components/HomeContent/HomecContent.vue";
export default {
  components: {
    homeheader,
    homecontent
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#Home
  width 100%
  height 5000px
  background-color #EEEEEE
 
</style>
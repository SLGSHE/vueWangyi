
<template>
  <div>
    <listheader />
    <listcontent />
  </div>
</template>

<script type="text/ecmascript-6">
// 分类头部区域
import listheader from "../../components/ListHeader/ListHeader.vue";
import listcontent from "../../components/ListContent/ListContent.vue";
export default {
  components: {
    listheader,
    listcontent
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
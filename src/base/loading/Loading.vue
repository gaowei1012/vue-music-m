<template>
  <div class="loading">
    <img width="24px" height="24px" src="./loading.gif" />
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '加载中...'
    }
  },
  name: 'Loading'
}
</script>

<style lang="stylus" rel="stylesshet/stylus" scoped >
    @import "../../common/stylus/variable"
  .loading
    width 100%
    text-align center
    .desc
      line-height 20px
      font-size $font-size-small
</style>





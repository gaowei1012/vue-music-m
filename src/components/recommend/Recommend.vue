<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="playlists">
      <div>
        <div class="slider-wrapper">
          <slider>
            <!-- dom初始化完毕后, 加载样式 使用 v-if判断 -->
            <div v-if="recommends.length" v-for="item in recommends" :key="item.encodeId">
              <a :href="item.url">
                <img @load="ImgeLoad" :src="item.imageUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <!-- <h1 class="list-title">热门歌单推荐</h1>  -->
          <ul class="item-wrap" style="width: 100%">
            <div class="list-title">
              <h3>推荐歌单
                <span>></span>
              </h3>
            </div>
            <div class="item-wrap">
              <li v-for="(item, index) in playlists" :key="index" class="item">
                <img class="img" v-lazy="item.coverImgUrl">
                <span class="name">{{item.name}}</span>
              </li>
            </div>
          </ul>
        </div>
        <div class="loading-conatiner" v-show="!this.playlists.length">
          <loading></loading>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getBanner, getDiscList, getPlayList } from "../../api/recommend"
import { CODE_SUCCESS } from "../../api/config"
import Slider from "../../base/slider/Slider.vue"
import Scroll from "../../base/scroll/Scroll.vue"
import Loading from '../../base/loading/Loading.vue'

export default {
  name: "Recommend",
  components: {
    Slider,
    Scroll,
    Loading
  },
  data: () => {
    return {
      recommends: [],
      playlists: []
    };
  },
  created() {
    this._getRecommend();
    this._getDiscList();
    this._getPlayList();
  },
  methods: {
    _getRecommend() {
      getBanner().then(res => {
        //console.log(res.data)// obj
        this.recommends = res.data.banners;
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        console.log(res.data);
      });
    },
    _getPlayList() {
      getPlayList().then(res => {
        this.playlists = res.data.playlists;
        //console.log(res.data.playlists)
      });
    },
    ImgeLoad() {
      if (!this.chengClick) {
        this.$refs.scroll.refresh()
        this.chengClick = true
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .item-wrap {
        width: 100%;

        .list-title {
          height: 65px;
          line-height: 65px;
          margin-left: 15px;
          font-size: 18px;
          text-align: left;
          font-size: $font-size-medium;
          color: $color-theme;
        }

        .item-wrap {
          display: flex;
          flex-wrap: wrap;

          .item {
            display: flex;
            justify-content: flex-start;
            margin: 6px 6px;
            flex-wrap: wrap;
            width: 45%;

            .img {
              width: 99%;
              height: 75%;
              padding: 0 10px;
            }

            .name {
              text-align: center;
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
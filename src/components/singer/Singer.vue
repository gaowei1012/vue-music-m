<template>
    <div class="singer">
       <ul v-for="item in singerlist" :key="item.id">
           <li class="item">
               <img width="90" height="90" :src="item.picUrl" />
               <span>{{item.name}}</span>
           </li>
       </ul>
    </div>
</template>

<script>
import { getSingerList, getSingerDesc } from '../../api/singer'

export default {
    name: 'Singer',
    data: () => {
        return {
            singerlist: []
        }
    },
    created() {
        this._getSinger()
        //this._getSingerDesc()
    },
    methods: {
        _getSinger() {
            getSingerList().then(res => {
                //console.log(res.data)
                this.singerlist = res.data.artists
                let id = res.data.artists.id// 歌手id
                // 歌手描述
                this._getSingerDesc(id)
            })
        },
        _getSingerDesc(id) {
            getSingerDesc(id).then(res => {
                console.log(res.data)
            })
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    
    ul,li 
        list-style none

    .singer
        width 100%
        display flex
        justify-content flex-start
        flex-direction column
        overflow hidden

</style>



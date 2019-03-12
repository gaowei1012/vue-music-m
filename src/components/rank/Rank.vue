<template>
    <div class="rank">
        <ul v-for="(item,index) in ranklists" :key="index">
            <li></li>
        </ul>
    </div>
</template>


<script>
import { getRank } from '../../api/rank'

export default {
    name: 'Rank',
    data: () => {
        return {
            ranklists: []
        }
    },
    created() {
        this._getRankList()
    },
    methods: {
        _getRankList() {
            getRank().then(res => {
                console.log(res.data)
            })
        }
    }
}
</script>

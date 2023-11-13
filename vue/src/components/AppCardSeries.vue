<script>
    import { store } from '../store';
    export default {
        props:{
            serie:{
                type: Object,
                required: true,
            }
        },
        data(){
            return{
                store: store,
            }
        },
        computed:{
            srcFlag(){
                return this.store.flags[this.serie.original_language]
            }
        },
        
    }
</script>

<template>    
    <ul>
        <li><img :src="`https://image.tmdb.org/t/p/w200${serie.poster_path}`" alt=""></li>
        <li>{{ serie.original_title }}</li>
        <li>{{ serie.title }}</li>
        <div class="flex">
            <li v-for="star of (Math.round(serie.vote_average / 2))"><font-awesome-icon :icon="['fas', 'star']" /></li>
            <li v-for="star of (5 - (Math.round(serie.vote_average / 2)))"><font-awesome-icon :icon="['far', 'star']" /></li>
        </div>
        <div class="flags">
            <li>
                <img height="20" v-if="srcFlag" :src="srcFlag" alt="">
                <p v-else>{{serie.original_language}}</p>
            </li>
        </div> 
    </ul>
</template>

<style>
    .flex{
        display: flex
    }
</style>
<script>
    import { store } from '../store';
    export default {
        props:{
            movie:{
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
                return this.store.flags[this.movie.original_language]
            }
        },
        methods:{
            star(){
                for(let i = 0; i = (Math.round(this.movie.vote_average) / 2); i++){
                    `<font-awesome-icon :icon="['fas', 'star']" />`
                }
            }
        }
    }
</script>

<template> 
    <ul>
        <li><img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt=""></li>
        <li>{{ movie.original_name }}</li>
        <li>{{ movie.name }}</li>
        <div class="flex">
            <li v-for="star of (Math.round(movie.vote_average / 2))"><font-awesome-icon :icon="['fas', 'star']" /></li>
            <li v-for="star of (5 - (Math.round(movie.vote_average / 2)))"><font-awesome-icon :icon="['far', 'star']" /></li>
        </div>
        
            
   
        
        <div class="flags">
            <li>
                <img height="20" v-if="srcFlag" :src="srcFlag" alt="">
                <p v-else>{{ movie.original_language }}</p>
            </li>
        </div> 
    </ul>
</template>

<style>
    
</style>
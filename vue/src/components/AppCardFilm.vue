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
        }
    }
</script>

<template> 
    <ul>
        <li><img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt=""></li>
        <li>{{ movie.original_name }}</li>
        <li>{{ movie.name }}</li>
        <li>{{ movie.vote_average }}</li>
        
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
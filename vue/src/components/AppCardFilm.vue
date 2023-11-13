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
        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="" class="cover">
    <ul class="info">    
        <li>Nome Originale : {{ movie.original_name }}</li>
        <li>Nome : {{ movie.name }}</li>
        <li class="flex">
            <p>Voto :</p> 
            <p v-for="star of (Math.round(movie.vote_average / 2))"><font-awesome-icon :icon="['fas', 'star']"  class="star"/></p>
            <p v-for="star of (5 - (Math.round(movie.vote_average / 2)))"><font-awesome-icon :icon="['far', 'star']" /></p>
        </li>
        <li class="flag">
            <img height="40" v-if="srcFlag" :src="srcFlag" alt="">
            <p v-else>{{ movie.original_language }}</p>  
        </li> 
    </ul>
</template>

<style lang="scss">
    @use '../style/general.scss';
</style>
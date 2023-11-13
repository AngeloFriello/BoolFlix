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
    <img :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`" alt="" class="cover">
    <ul class="info">
        <li>Nome Originale : {{ serie.original_title }}</li>
        <li>Nome : {{ serie.title }}</li>
        <li class="flex">
            <p>>Voto :</p>
            <p v-for="star of (Math.round(serie.vote_average / 2))"><font-awesome-icon :icon="['fas', 'star']" class="star"/></p>
            <p v-for="star of (5 - (Math.round(serie.vote_average / 2)))"><font-awesome-icon :icon="['far', 'star']" /></p>
        </li>
        <li class="flag">
            <img height="40" v-if="srcFlag" :src="srcFlag" alt="">
            <p v-else>{{serie.original_language}}</p>
        </li>
    </ul>
</template>

<style lang="scss">
    @use '../style/general.scss';
</style>
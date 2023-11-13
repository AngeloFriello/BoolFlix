<script>
    import { store } from '../store';
    export default {
        props:{
            item:{
                type: Object,
                required: true,
            },

        },
        data(){
            return{
                store: store,
            }
        },
        computed:{
            srcFlag(){
                return this.store.flags[this.item.original_language]
            },
        },
        
    }
</script>

<template>
    <img  :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="" class="cover">
    <ul class="info">
        <li >Nome Originale : {{ item.original_title }} {{ item.original_name }}</li>
        <li>Nome : {{ item.title }} {{ item.name }}</li>
        <!-- <li>Descrizione : {{ item.overview }}</li> -->
        <li>{{ item.release_date }} {{ item.first_air_date }}</li>
        <li class="flex">
            <p>>Voto :</p>
            <p v-for="star of (Math.round(item.vote_average / 2))"><font-awesome-icon :icon="['fas', 'star']" class="star"/></p>
            <p v-for="star of (5 - (Math.round(item.vote_average / 2)))"><font-awesome-icon :icon="['far', 'star']" /></p>
        </li>
        <li class="flag">
            <img height="40" v-if="srcFlag" :src="srcFlag" alt="">
            <p v-else>{{item.original_language}}</p>
        </li>
    </ul>
</template>

<style lang="scss">
    @use '../style/general.scss';
</style>
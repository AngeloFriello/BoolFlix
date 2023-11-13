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
            original_name(){
                if(this.item.original_title){
                    return this.item.original_title
                }
                else{
                    return this.item.original_name
                }
            },
            name(){
                if(this.item.title){
                    return this.item.title
                }
                else{
                    return this.item.name
                }
            },
            date(){
                if(this.item.release_date){
                    return this.item.release_date
                }
                else{
                    return this.item.first_air_date
                }
            }
        },
        
    }
</script>

<template>
    <img  :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="" class="cover">
    <ul class="info">
        <li >Nome Originale : {{ original_name }}</li>
        <li>Nome : {{ name }}</li>
        <!-- <li>Descrizione : {{ item.overview }}</li> -->
        <li>{{ date }} </li>
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
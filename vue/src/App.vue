<script>
    import HeaderApp from './components/HeaderApp.vue';
    import MainApp from './components/MainApp.vue';
    import FooterApp from './components/FooterApp.vue';
    import AppCard from './components/AppCard.vue';
    import { store } from './store.js';
    import axios from 'axios';

    export default {
        components:{
            HeaderApp,
            MainApp,
            FooterApp,
        },
        data() {
            return{
                store: store,
                productsUrl:'https://api.themoviedb.org/3/search/tv',
                query: 'Ritorno al Futuro',
            }
        },
        methods:{
            searchMovie(){
                axios.get(this.productsUrl,{
                    params:{
                        'api_key': this.store.apiKey,
                        'query': this.store.searchText,
                    }
                })
                .then(res=>{
                    console.log(res);
                    const movies = res.data
                    this.store.movies = movies
                })
            }
        },
        created(){
 
        },
    } 
</script>

<template>
    <header>
        <HeaderApp @search="searchMovie"/>
    </header>
    <main>
        <MainApp/>
    </main>
    <footer>
        <FooterApp/>
    </footer>
</template>

<style>

</style>

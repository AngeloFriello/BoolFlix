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
            AppCard,
        },
        data() {
            return{
                store: store,
                moviesUrl:'https://api.themoviedb.org/3/search/tv',
                siriesUrl:'https://api.themoviedb.org/3/search/movie',
                query: 'Ritorno al Futuro',
            }
        },
        methods:{
            searchMovie(){
                if(this.store.searchText === ''){
                    store.movies = []
                    store.series = []
                    return

                }else{
                    axios.get(this.moviesUrl,{
                    params:{
                        'api_key': this.store.apiKey,
                        'query': this.store.searchText,
                    }
                    })
                    .then(res=>{
                        console.log(res);
                        const movies = res.data
                        this.store.movies = movies
                    });

                    axios.get(this.siriesUrl,{
                    params:{
                        'api_key': this.store.apiKey,
                        'query': this.store.searchText,
                    }
                    })
                    .then(res2=>{
                        console.log(res2)
                        const series = res2.data
                        this.store.series = series
                    })
                }

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

<style lang="scss">
    @use './style/general.scss';
    @use './style/partials/variable.scss';
    @use './style/partials/mixin.scss';
</style>

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
                const movie = res.data
                this.store.movie = movie
            })
            }
        },
        created(){
 
        },
    } 
</script>

<template>

    <body>
        <div id="app">
            <header>
                <HeaderApp @search="searchMovie"/>
            </header>
            <main>
                <MainApp/>
            </main>
            <footer>
                <FooterApp/>
            </footer>
        </div>
    </body>

</template>

<style>

</style>

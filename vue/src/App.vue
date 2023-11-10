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

            }
        },
        created(){

        },
    } 
</script>

<template>

</template>

<style>

</style>

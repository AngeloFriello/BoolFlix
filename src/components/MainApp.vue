<script>
    import { store } from '../store';
    import AppCard from './AppCard.vue';

    export default {
    props: {
        movies: {
            type: Object,
            required: true,
        },
        series:{
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            store: store,
        };
    },
    components: 
    { AppCard }
   

}
</script>

<template>
    <div class="container">
        <div>
            <h2 class="section">Film</h2>
            <ul class="grid">
                <li v-for="(serie , index) in store.series.results" :key="index" class="card">
                    <AppCard :item="serie" />
                </li>
            </ul>
        </div>
        <div>
            <h2 class="section">Serie TV</h2>
            <ul class="grid">
                <li v-for="(movie , index) in store.movies.results" :key="index" class="card">
                    <AppCard :item="movie" />
                </li>
            </ul>
        </div>
        
        <div>
            
        </div>
    </div>
</template>

<style lang="scss">
    @use '../style/general.scss';
</style>
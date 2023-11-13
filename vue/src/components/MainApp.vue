<script>
    import { store } from '../store';
    import AppCardFilm from './AppCardFilm.vue';
    import AppCardSeries from './AppCardSeries.vue';
    export default {
    props: {
        movies: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            store: store,
        };
    },
    components: 
    { AppCardFilm, AppCardSeries}
   

}
</script>

<template>
    <div class="container">
        <div>
            <h2>FILM</h2>
            <ul class="grid">
                <li v-for="(movie , index) in store.movies.results" :key="index" class="card">
                    <AppCardFilm :movie="movie" />
                </li>
            </ul>
        </div>
     
        <div>
            <h2>SERIE</h2>
            <ul class="grid">
                <li v-for="(serie , index) in store.series.results" :key="index" class="card">
                    <AppCardSeries :serie="serie" />          
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../style/general.scss';
</style>
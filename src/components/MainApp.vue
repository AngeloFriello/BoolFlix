<script>
    import { store } from '../store';
    import AppCard from './AppCard.vue';

    export default {
    props: {
        item: {
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
            <h2 class="section">SERIE TV e FILM</h2>
            <ul class="grid">
                <li v-for="(movie , index) in store.movies.results" :key="index" class="card">
                    <AppCard :item="movie" />
                </li>
                <li v-for="(serie , index) in store.series.results" :key="index" class="card">
                    <AppCard :item="serie" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../style/general.scss';
</style>
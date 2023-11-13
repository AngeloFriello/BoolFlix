<script>
    import { store } from '../store';
    import AppCard from './AppCard.vue';
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
    components: { AppCard }
}
</script>

<template>
    <div class="container">
        <ul class="grid">
            <li v-for="(movie , index) in store.movies.results" :key="index">
                <AppCard :movie="movie" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    @use '../style/general.scss'
</style>
<script>
    import { store } from '../store';
    export default {
        data(){
            return{
                store: store,
            }
        }
    }
</script>

<template>
    <div>
        <input class="search" type="text" v-model="store.searchText" placeholder="cerca" @keyup.enter="$emit('search')">
    </div>
    <h1 class="title">BOOLFLIX</h1>
</template>

<style>

</style>
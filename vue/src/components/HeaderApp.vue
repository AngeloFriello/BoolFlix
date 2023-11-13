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
    <div class="ricerca">
        <input class="search" type="text" v-model="store.searchText" placeholder="cerca" @keyup.enter="$emit('search')">     
    </div>
</template>

<style>
    .ricerca{
        width: 1200px;
        margin: 0px 1500px;
        
    }

    .button{
        background-color: red;
        width: 20px;
        height: 20px;
        margin: 10px;
    }
</style>
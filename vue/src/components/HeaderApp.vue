<script>
    import { store } from '../store';
    export default {
        data(){
            return{
                textsearch:'',
            }
        }
    }
</script>

<template>
    <div class="ricerca">
        <input type="text" v-model="textsearch" placeholder="cerca">
        <p>{{ textsearch }}</p>
        <button class="button" @click="$emit('search', textsearch)"></button>
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
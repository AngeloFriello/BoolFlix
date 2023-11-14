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
    
    <img src="../../public/BrandAssets_Logos_01-Wordmark.jpg" alt="" class="logo">
    <ul class="header_list">
        <li><a href=""> Serie TV</a></li>
        <li><a href=""> Film</a></li>
        <li><a href=""> Home</a></li>
        <li><a href=""> Originali</a></li>
        <li><a href=""> Aggiunti di Recente</a></li>
        <li><a href=""> La Mia Lista</a></li>
    </ul>

    <div>
        <select name="" id="" class="select">
            <option value="Bambini">Bambini</option>
            <option value="Adulti">Adulti</option>
        </select>
        <input class="search" type="text" v-model="store.searchText" placeholder="cerca" @keyup.enter="$emit('search')">
    </div>
    

</template>

<style>

</style>
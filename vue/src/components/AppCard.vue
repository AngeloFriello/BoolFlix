<script>
    import { store } from '../store';
    export default {
        props:{
            movie:{
                type: Object,
                required: true,
            }
        },
        data(){
            return{
                store: store,
                language:[],
            }
        },
        computed:{
            srcFlag(){
                return this.store.flags[this.movie.original_language]
            }
        }
        // mounted:{
        //     flag(boolean){
        //         if(movie.original_language.toLowerCase().icludes('it'.toLowerCase())){
        //             return
        //             boolean === true
        //         }else{
        //             return
        //             boolean === false
        //         }
        //     }
        // }
    }
</script>

<template>
    <ul>
        <li>{{ movie.original_name }}</li>
        <li>{{ movie.name }}</li>
        <li>{{ movie.vote_average }}</li>
        <div class="flags">
            <li>
                <img height="20" v-if="srcFlag" :src="srcFlag" alt="">
                <p v-else>{{ movie.original_language }}</p>
            </li>
        </div> 
    </ul>
</template>

<style>
    
</style>
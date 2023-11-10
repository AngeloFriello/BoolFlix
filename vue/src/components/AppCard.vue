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

            }
        }
    }
</script>

<template>
    <ul>
        {{ movie.original_name }}
    </ul>
</template>

<style>

</style>
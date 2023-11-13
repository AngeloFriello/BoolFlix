import { reactive } from "vue";

export const store = reactive({
    movies:[],
    series: [],
    apiKey:'bfd01170a3a59c443ae04a12a2b7342a',
    searchText: '',
    flags:{
        it:'/it.webp',
        en:'/en.png',
        es:'/sp.jpg',
        de:'/de.jpg',
    },
})
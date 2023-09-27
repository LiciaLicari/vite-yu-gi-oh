<script>
import { store } from '../store.js';
import AppList from './AppList.vue';
import AppSearch from './AppSearch.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    created() {
        store.fetchData(this.store.base_url)
        store.fetchFilter()
    },

    methods: {
        filterArch() {
            console.log(store.searchFilter);
            //console.log(this.store.base_url);
            const archUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?' + `archetype=${store.searchFilter}&` + 'num=1000&offset=0';
            console.log(archUrl);
            store.fetchData(archUrl);
        }
    },

    components: { AppList, AppSearch }
}
</script>

<template>
    <main class="py-4">
        <AppSearch @select-filter="filterArch"></AppSearch>
        <AppList v-if="store"></AppList>
       
        <div v-else>
            Loading
        </div>

    </main>
</template>


<style lang="scss" scoped>
@use '../src/assets/scss/partials/variables' as *;

</style>
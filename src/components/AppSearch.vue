<script>
import { store } from '../store.js'

export default {
    name: 'AppSearch',
    emits:['select-filter'],

    data() {

return {
    store
}
},


}
</script>

<template>
    <div class="filter py-4 px-4 mb-2">
        <select class="form-select" id="select" @change="$emit('select-filter')" v-model="store.selectedArchetype">
            <option value="" selected="selected" hidden="hidden">search</option>
            <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{archetype.archetype_name}}</option>
            
        </select>
    </div>
</template>



<style lang="scss" scoped>

</style>
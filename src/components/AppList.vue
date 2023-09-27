<script>
import { store } from '../store.js'
import AppCard from "./AppCard.vue"
export default {
    name: 'AppList',
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container py-4 bg-white">
        <div class="row p-2">
            <AppCard v-for="card in store.cards" :card="card"></AppCard>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
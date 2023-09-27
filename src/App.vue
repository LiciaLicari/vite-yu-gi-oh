<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'




export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  created() {
    setTimeout(store.fetchData, 2000)
  },
  components:{
    AppHeader,
    AppMain,
    

  },
  
}
</script>

<template>

<AppHeader />

<AppMain />

</template>

<style lang="scss">
@use '../src/assets/scss/partials/variables' as *;



.card {
  background: $yugioh__bg;
}
</style>

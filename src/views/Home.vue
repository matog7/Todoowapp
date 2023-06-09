<script setup>

import Recherche from '../components/Recherche.vue';

</script>

<template>
  <main>
    <h2 class="title">Vos tâches</h2>
    <Recherche />
  </main>
</template>

<script>
export default {

  mounted() {
    document.title = 'Todoowapp | Accueil';
  }
}
</script>
<style scoped>

</style>


<script setup>

import Recherche from '../components/Recherche.vue';

</script>

<template>
  <main>
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

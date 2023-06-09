<script setup>

import CreateTasks from '../components/CreateTasks.vue';

</script>

<template>
  <main>
    <div class="formulaire">
      <h2>Créer votre nouvelle tâche</h2>
      <CreateTasks />
    </div>
  </main>
</template>
<script>
export default {
  mounted() {
      document.title = 'Todoowapp | Création tâche';
  },
}
</script>
<style scoped>
  .formulaire{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
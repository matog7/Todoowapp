<script setup>

import ModifTasks from '../components/modifTasks.vue';

</script>

<template>
  <main>
    <div class="formulaire">
      <h2>Modifier votre tâche</h2>
      <ModifTasks />
      
    </div>
  </main>
</template>
<script>
export default {
    mounted() {
        document.title = 'Todoowapp | Modification tâche';
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
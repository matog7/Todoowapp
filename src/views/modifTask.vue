<script setup>

import modifTasks from '../components/modifTasks.vue';

</script>

<template>
  <main>
    <div class="formulaire">
      <h2>Modifier votre tâche</h2>
      <modifTasks />
    </div>
  </main>
</template>
<script>
export default {
    data() {
        return {
            tasks: {
                nom: '',
                description: '',
                debut: '',
                fin: '',
                etat: '',
                priorite: ''
            }
        }
    },
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
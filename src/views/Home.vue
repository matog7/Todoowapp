<script setup>

import Recherche from '../components/Recherche.vue';
import PrintDoneTasks from '../components/PrintDoneTasks.vue';

</script>

<template>
  <main class="main">
    <h2 class="title">Vos tâches</h2>
    <div class = "menu">
      <a @click="showAll">Tâches en cours</a>
      <a @click="showDone">Tâches terminées</a>
    </div>
    <div v-if="done">
      <PrintDoneTasks />
    </div>
    <div v-else>
      <Recherche />
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      done: false,
    }
  },
  mounted() {
    document.title = 'Todoowapp | Accueil';
  }, 
  methods: {
    showAll(){
      this.done = false;
    },
    showDone(){
      this.done = true;
    }
  },
}
</script>
<style scoped>
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  font-family: 'ailerons', sans-serif;
}
.menu a {
  background-color: transparent;
  cursor: pointer;
  color: #481C4B
}

.menu a:hover {
  color: #2DCF42;
  transition: 0.2s;
}

.menu a:last-of-type{
  border-left : 2px solid #481C4B;
  margin-left: 1rem;
  padding: 0 1rem;
}

</style>


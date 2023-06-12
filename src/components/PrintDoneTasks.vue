<script setup>

import PrintTasks from './PrintTasks.vue';

</script>

<template>
    <div class="container">
      <h2 class="title">Les tâches terminées</h2>
      <div class="task-info" v-for="task in this.data" :key="index">
        <PrintTasks v-if="this.data != null" :data="task"/>
      </div>
      <p v-if="print == true"> {{ infos }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data(){
        return {
            print: false,
            infos: '',
            data: [],
            done: [],
        }
    },
    created() {
        this.print = false;
        // Récupère les tâches terminées depuis le localStorage au chargement de l'application
        const savedTasks = localStorage.getItem('done');
        if (savedTasks) {
            this.data = JSON.parse(savedTasks);
        }
        console.log(this.data);
        // this.data.forEach(task => {
        //     if (task.etat.match("terminé")){
        //         this.done.push(task);
        //     }
        // });
        if (this.data.length == 0){
            this.print = true;
            this.infos = "Vous n'avez terminée aucune tâche pour le moment.";
        }
    },
    components: { PrintTasks }   
  }
  
  
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    font-family: 'ailerons', sans-serif;
  }

  .task{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon{
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }
  .task-info{
    color: white;
    margin-bottom: 2rem;
    display: flex;
    width: 55rem;
    flex-direction: row;
    background-color: #481C4B;
    border-radius: 10px;
  }

  .task-info p:first-of-type{
    font-weight: bold;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .task-info p{
    margin-right: 1rem;
  }
  </style>

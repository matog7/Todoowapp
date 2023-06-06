<template>
    <h2 class="title"> {{ infos }}</h2>
    <div class="search-task">
        <input type="text" class="filter-name" v-model="task" v-on:keyup.enter="getWeather" placeholder="Nom de la tâche.."/>
    </div>

    <div class="task-infos" v-for="task in searchTask" :key="index">
      <PrintTask v-if="this.tasks != null" :data="task" />
    </div>

    <div class="task-infos" v-if="searchTask.length == 0" v-for="task in this.tasks" :key="index">
      <PrintTask v-if="this.tasks != null" :data="task" />
    </div>
  </template>
  
  <script>
import PrintTask from './PrintTasks.vue';

  export default {
    data() {
      return {
        infos: "Vous pouvez rechercher une tâche !",
        task: '',
        tasks: [],
        recherche: false,
        data: []
      }
    },
    created() {
    // Récupère les données depuis le localStorage au chargement de l'application
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
      console.log(this.tasks);
    },
    computed: {
      searchTask() {
        if (this.task) {
          if (this.searchTask.length == 0){
            this.infos = "Aucune tâche filtrée !";
          } else {
            this.infos = this.searchTask.length + " tâche(s) filtrée(s) !";
          }
          return this.tasks.filter((task) => {
            return task.nom.toLowerCase().match(this.task.toLowerCase());
          });
        } else {
          this.infos = "Vous pouvez rechercher une tâche !";
          return this.tasks;
        }
      },
    },
    components: { PrintTask }
}
  </script>
  
  <style scoped>
  
  .search-task {
    margin-top: 2rem;
    display: flex;
  }

  .task-infos {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    height: 4rem;
    padding-bottom: 10px;
  }

  .filter-name{
    height: 1rem;
    border: 1px solid #2DCF42;
    border-radius: 15px;
    padding: 0.4rem;
  }

  .filter-name:focus {
    outline: none;
    background-color: #2DCF42;
    color: white;
  }
  
  .details {
    flex: 1;
    margin-left: 1rem;
  }
  
  i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;
    color: var(--color-text);
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }
  
  @media (min-width: 1024px) {
    .item {
      margin-top: 0;
      padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    }
  
    i {
      top: calc(50% - 25px);
      left: -26px;
      position: absolute;
      border: 1px solid var(--color-border);
      background: var(--color-background);
      border-radius: 8px;
      width: 50px;
      height: 50px;
    }
  
    .item:before {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: absolute;
      left: 0;
      bottom: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .item:after {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: absolute;
      left: 0;
      top: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .item:first-of-type:before {
      display: none;
    }
  
    .item:last-of-type:after {
      display: none;
    }
  }
  </style>
  
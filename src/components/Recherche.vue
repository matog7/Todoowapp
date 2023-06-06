<template>
    <h2 class="title"> {{ infos }}</h2>
    <div class="weather-info">
        <input type="text" v-model="task" v-on:keyup.enter="getWeather" />
        <button class="search-button" @click="getWeather"> Rechercher </button>
    </div>

    <DailyView v-if="this.data != null" :data="this.data" :city ="this.city" />
    <div class="week-infos" v-for="(task, index) in this.tasks" :key="index">
      <PrintTask v-if="this.tasks != null" :data="task" />
    </div>
  </template>
  
  <script>
import PrintTask from './PrintTasks.vue';

  export default {
    data() {
      return {
        infos: "Vous pouvez rechercher une tâche !",
        tasks: [],
        data: null
      }
    },
    created() {
    // Récupère les données depuis le localStorage au chargement de l'application
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    },
    components: { PrintTask }
}
  </script>
  
  <style scoped>
  
  .weather-info {
    margin-top: 2rem;
    display: flex;
  }

  .week-infos {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    height: 4rem;
    padding-bottom: 10px;
  }

  .search-button {
    background-color: #43A047;
    margin-left: 0.4rem;
    border: none;
    color: white;
    text-align: center;
    border-radius: 5px;
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
  
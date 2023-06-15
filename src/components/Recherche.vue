<template>
  <div class="affichage">
    <h3 class="subtitle">{{ infos }}</h3>
    <div class="search-task">
        <div class="search-filter">
          <label for="taskName">Nom de la tâche:</label>
          <input type="text" class="filter-name" v-model="task" placeholder="Nom de la tâche.."/>
        </div>
        <div class="search-filter">
          <label for="dateDebut">Date de début</label>
          <input type="date" v-model="selectedStart" id="dateDebut"/>
        </div>
        <div class="search-filter">
          <label for="dateFin">Date de fin</label>
          <input type="date" v-model="selectedEnd" id = "dateFin"/>
        </div>
        <div class="search-filter">
          <label for="etat">état de la tâche</label>
          <select v-model="selectedEtat" id="etat">
            <option value="à faire">à faire</option>
            <option value="en cours">en cours</option>
          </select>
        </div>
        <div class="search-filter">
          <label for="prio">priorité de la tâche</label>
          <select v-model="selectedPrio" id="prio">
            <option value="haute">haute</option>
            <option value="moyenne">moyenne</option>
            <option value="basse">basse</option>
          </select>
        </div>
        <button class="btn" @click="applyFilter">Rechercher</button>
        <button class="btn" @click="resetFilter">Effacer</button>
    </div>

    <div class="task-infos" v-if="this.filtrage == false" v-for="task in searchTask" :key="index">
        <PrintTask v-if="this.tasks != null" :data="task" />
    </div>

    <div class="task-infos" v-if="this.filtrage == true" v-for="task in this.filteredTasks" :key="index">
        <PrintTask v-if="this.filteredTasks != null" :data="task" />
    </div>

    <p class="nothing" v-if="searchTask.length == 0">Aucune tâche ne correspond à votre recherche.</p>
    <p class="nothing" v-if="this.filtered == true">Aucune tâche ne correspond à ces critères.</p>
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
        data: [], 
        filtrage: false,
        filteredTasks: [], 
        alerted: false, 
        filtered: false,
      }
    },
    created() {
      // Récupère les données depuis le localStorage au chargement de l'application
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
      console.log(this.tasks);
      // Prépare une alerte indiquant les taches à terminer aujourd'hui
      // if (this.alerted == false){
      //   this.alertTasks();
      // }
    },
    computed: {
      searchTask() {
        if (this.task) {
          this.filtrage = false;
          this.filteredTasks = [];
          this.selectedEtat = "";
          this.selectedPrio = "";
          this.selectedStart = "";
          this.selectedEnd = "";
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
    methods: {
      applyFilter() {
        this.filtrage = true;
        this.filteredTasks = this.tasks.filter(task => {
          if (this.selectedPrio == "haute") {
            return task.priorite.includes("haute");
          } else if (this.selectedPrio == "moyenne") {
            return task.priorite.includes("moyenne");
          } else if (this.selectedPrio == "basse") {
            return task.priorite.includes("basse");
          } else if (this.selectedEtat == "en cours") {
            return task.etat.includes("en cours");
          } else if (this.selectedEtat == "à faire") {
            return task.etat.includes("à faire");
          } else if (this.selectedEtat == "terminé") {
            return task.etat.includes("terminé");
          } else if (this.selectedStart != "" && this.selectedEnd != "") {
            return task.dateDebut >= this.selectedStart && task.dateFin <= this.selectedEnd;
          } else { 
            return this.infos = "Aucune tâche filtrée...";
          }
        });
    },
    // alertTasks(){
    //   this.tasks.forEach((t) => {
    //     if (t.dateFin = new Date()){
    //       this.data.push(t.nom);
    //     }
    //   });
    //   if (this.data.length > 1){
    //     const tasksToBeDone = this.data.join(", ");
    //     alert("Bonjour ! Vous avez les tâches " + tasksToBeDone + " à terminer !");
    //   } else if (this.data.length == 1){
    //     alert("Bonjour ! Vous avez la tâche " + this.data + " à terminer !");
    //   }
    //   this.alerted = true;
    // }, 

    resetFilter(){
      this.filtrage = false;
      this.filteredTasks = [];
      this.selectedEtat = "";
      this.selectedPrio = "";
      this.selectedStart = "";
      this.selectedEnd = "";
    }

    },
    components: { PrintTask }
}
  </script>
  
  <style scoped>
  .affichage{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .search-task {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    height: 6rem;
    padding-bottom: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #481C4B;
    width: 75rem;
  }

  .task{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .task-infos {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    height: 4rem;
    margin-bottom: 2rem;
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

  .search-filter {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  .search-filter label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: white;
  }

  .search-filter input {
    padding: 0.5rem;
  }

  .btn {
    background-color: #2DCF42;
    color: white;
    border: none;
    border-radius: 15px;
    padding: 0.4rem;
    height: 2rem;
    margin-right: 0.5rem;
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
    font-size: 0.8rem;
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
  
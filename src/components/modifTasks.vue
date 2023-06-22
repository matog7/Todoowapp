<template>
    <main>
      <form @submit="submitForm">
        <label for="taskName">Nom de la tâche:</label>
        <p>{{ this.toModif[0].nom }}</p>
  
        <label for="taskDescription">Description de la tâche:</label>
        <textarea id="taskDescription" v-model="taskDescription" :placeholder=" this.toModif[0].description"></textarea>
  
        <label for="dateDebut">Date de début</label>
        <input type="date" id="dateDebut" v-model="taskDebut">
  
        <label for="dateFin">Date de fin</label>
        <input type="date" id="dateFin" v-model="taskFin">
  
        <label for="etat">État de la tâche</label>
        <select id="etat" v-model="taskEtat">
          <option value="à faire">à faire</option>
          <option value="en cours">en cours</option>
          <option value="terminé">terminé</option>
        </select>
  
        <label for="prio">Priorité de la tâche</label>
        <select id="prio" v-model="taskPriorite">
          <option value="haute">haute</option>
          <option value="moyenne">moyenne</option>
          <option value="basse">basse</option>
        </select>
  
        <button class="test" type="submit">Mettre à jour</button>
      </form>
    </main>
  </template>
  
  <script>
  export default {
    data(){
      return {
        tasks: [],
        toModif: [],
        indexModif: null,
      }
    },
  
    created() {
      const modifTask = localStorage.getItem('modif');
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks && modifTask) {
        this.tasks = JSON.parse(savedTasks);
        this.toModif = JSON.parse(savedTasks);
      }
      this.indexModif = this.tasks.findIndex(task => task.nom == this.toModif[0].nom);
      
      console.log("indexModif : " + this.indexModif);
      console.log("ancienne descript : " + this.tasks[this.indexModif].description);
    },
  
    methods: {
      submitForm(event) {
        event.preventDefault();
  
        if (this.taskFin < this.taskDebut) {
          console.log("date de fin < date de début");
          alert("date de fin < date de début");
          return;
        }
        console.log("modif : ");
        console.log('Description de la tâche:', this.taskDescription);
        console.log('date du début', this.taskDebut);
        console.log('date de fin', this.taskFin);
        console.log('état de la tâche', this.taskEtat);
        console.log('priorité de la tâche', this.taskPriorite);
  
        if (this.indexModif > -1) {
          this.tasks[this.indexModif].description = this.taskDescription;
          this.tasks[this.indexModif].debut = this.taskDebut;
          this.tasks[this.indexModif].fin = this.taskFin;
          this.tasks[this.indexModif].etat = this.taskEtat;
          this.tasks[this.indexModif].priorite = this.taskPriorite;
        }
  
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
  
        alert("Tâche modifiée.");
        this.reset();
      },
  
      reset() {
        localStorage.removeItem('modif');
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
  }
  
  .test {
    margin-top: 2rem;
    background-color: #2DCF42;
    border: none;
    color: white;
    text-align: center;
    border-radius: 5px;
  }
  </style>
  
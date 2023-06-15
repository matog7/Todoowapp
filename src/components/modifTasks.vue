<template>
    <main>
      <form @submit="submitForm">
        <label for="taskName">Nom de la tâche:</label>
        <input type="text" id="taskName" :value="tasks.nom" required>
  
        <label for="taskDescription">Description de la tâche:</label>
        <textarea id="taskDescription" v-model="tasks.description"></textarea>
  
        <label for="dateDebut">Date de début</label>
        <input type="date" id="dateDebut" v-model="tasks.debut">
  
        <label for="dateFin">Date de fin</label>
        <input type="date" id="dateFin" v-model="tasks.fin">
  
        <label for="etat">État de la tâche</label>
        <select id="etat" v-model="tasks.etat">
          <option value="à faire">à faire</option>
          <option value="en cours">en cours</option>
          <option value="terminé">terminé</option>
        </select>
  
        <label for="prio">Priorité de la tâche</label>
        <select id="prio" v-model="tasks.priorite">
          <option value="haute">haute</option>
          <option value="moyenne">moyenne</option>
          <option value="basse">basse</option>
        </select>
  
        <button class="test" type="submit">Ajouter</button>
      </form>
    </main>
  </template>
  
  <script>
  export default {
    props : ['data'],
  
    created() {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
      this.loadTaskData();
    },
  
    methods: {
      submitForm(event) {
        event.preventDefault();
  
        if (this.task.fin < this.task.debut) {
          console.log("date de fin < date de début");
          alert("date de fin < date de début");
          return;
        }
        console.log('Nom de la tâche:', this.task.nom);
        console.log('Description de la tâche:', this.task.description);
        console.log('date du début', this.task.debut);
        console.log('date de fin', this.task.fin);
        console.log('état de la tâche', this.task.etat);
        console.log('priorité de la tâche', this.task.priorite);
  
        const newTask = {
          nom: this.tasks.nom,
          description: this.tasks.description,
          debut: this.tasks.debut,
          fin: this.tasks.fin,
          etat: this.tasks.etat,
          priorite: this.tasks.priorite
        };
  
        this.tasks.push(newTask);
  
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
  
        alert("Tâche modifiée.");
        this.resetForm();
      },
  
      loadTaskData() {
        console.log("tttttttttt", this.tasks.nom)
        const taskData = localStorage.getItem('tasks');
        if (taskData) {
          const parsedData = JSON.parse(taskData);
          this.tasks = {
            nom: parsedData.nom,
            description: parsedData.description,
            debut: parsedData.debut,
            fin: parsedData.fin,
            etat: parsedData.etat,
            priorite: parsedData.priorite,
          }
        };
      },
  
      resetForm() {
        this.tasks= {
          nom: '',
          description: '',
          debut: '',
          fin: '',
          etat: '',
          priorite: ''
        };
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
  
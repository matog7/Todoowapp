<template>
  <main>
    <h2>Formulaire de création de tâches</h2>
    <form @submit="submitForm">
    <label for="taskName">Nom de la tâche:</label>
    <input type="text" id="taskName" v-model="taskName">
    
    <label for="taskDescription">Description de la tâche:</label>
    <textarea id="taskDescription" v-model="taskDescription"></textarea>
    
    <button type="submit">Ajouter</button>
  </form>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        tasks: [],
      }
    },
    created() {
    // Récupère les données depuis le localStorage au chargement de l'application
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    },
    mounted() {
        document.title = 'Todoowapp | Création tâche';
    },
    methods: {
        submitForm(event) {
        event.preventDefault(); // Empêche le rechargement de la page
        
        // Effectuer des opérations avec les données du formulaire
        console.log('Nom de la tâche:', this.taskName);
        console.log('Description de la tâche:', this.taskDescription);

        const newTask = {
            nom : this.taskName,
            description : this.taskDescription
        }
        this.tasks.push(newTask);

        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        
        // Réinitialiser les champs du formulaire
        this.taskName = '';
        this.taskDescription = '';
        }
    },
}
  </script>
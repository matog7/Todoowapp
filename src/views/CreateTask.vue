<template>
  <main>
    <div class="formulaire">
      <h2>Créer votre nouvelle tâche</h2>
      <form @submit="submitForm">
        <label for="taskName">Nom de la tâche:</label>
        <input type="text" id="taskName" v-model="taskName">
        
        <label for="taskDescription">Description de la tâche:</label>
        <textarea id="taskDescription" v-model="taskDescription"></textarea>

        <label for="dateDebut">Date de début</label>
        <input type="date" id="dateDebut" v-model="dateDebut">

        <label for="dateFin">Date de fin</label>
        <input type="date" id="dateFin" v-model="dateFin">

        <label for="etat">état de la tâche</label>
        <select id="etat" v-model="etat">
          <option value="à faire">à faire</option>
          <option value="en cours">en cours</option>
          <option value="terminé">terminé</option>
        </select>

        <label for="prio">priorité de la tâche</label>
        <select id="prio" v-model="prio">
          <option value="haute">haute</option>
          <option value="moyenne">moyenne</option>
          <option value="basse">basse</option>
        </select>
        
        <button class="test" type="submit">Ajouter</button>
      </form>
    </div>
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

          if(this.taskName===""){
            alert("pas de nom");
            return;
          };

          if(this.dateFin < this.dateDebut){
            console.log("date de fin < date de début");
            alert("date de fin < date de début");
            return;
          };
          
          // Effectuer des opérations avec les données du formulaire
          console.log('Nom de la tâche:', this.taskName);
          console.log('Description de la tâche:', this.taskDescription);
          console.log('date du début', this.dateDebut);
          console.log('date de fin', this.dateFin);
          console.log('état de la tâche', this.etat);
          console.log('priorité de la tâche', this.prio);

          const newTask = {
              nom : this.taskName,
              description : this.taskDescription,
              debut : this.dateDebut,
              fin : this.dateFin,
              etat : this.etat,
              priorite : this.prio
          }
          
          this.tasks.push(newTask);

          localStorage.setItem('tasks', JSON.stringify(this.tasks));
          
          // Réinitialiser les champs du formulaire
          alert("Tâche insérée.")
          this.taskName = "";
          this.taskDescription = "";
          this.dateDebut = "";
          this.dateFin = "";
        }
    },
}
  </script>

<style scoped>
  form{
    display: flex;
    flex-direction: column;
    width: 500px;
    
  }

  .formulaire{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .test{
    margin-top: 2rem;
    background-color: #2DCF42;
    border: none;
    color: white;
    text-align: center;
    border-radius: 5px;
  }
</style>
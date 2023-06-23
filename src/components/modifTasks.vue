<template>
  <main>
    <form @submit="submitForm">
      <label for="taskName">Nom de la tâche:</label>
      <p>{{ taskData.nom }}</p>

      <label for="taskDescription">Description de la tâche:</label>
      <textarea id="taskDescription" v-model="taskDescription" :placeholder="taskData.description"></textarea>

      <label for="dateDebut">Date de début</label>
      <input type="date" id="dateDebut" v-model="taskDebut" :value="taskData.debut">

      <label for="dateFin">Date de fin</label>
      <input type="date" id="dateFin" v-model="taskFin" :value="taskData.fin">

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
  data() {
    return {
      taskData: {},
      taskDescription: "",
      taskDebut: "",
      taskFin: "",
      taskEtat: "",
      taskPriorite: "",
    };
  },

  created() {
    const modifTask = localStorage.getItem("modif");
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks && modifTask) {
      this.taskData = JSON.parse(savedTasks)[0];
    }
  },

  methods: {
    submitForm(event) {
      event.preventDefault();

      if (this.taskFin < this.taskDebut) {
        console.log("date de fin < date de début");
        alert("date de fin < date de début");
        return;
      }

      this.taskData.description = this.taskDescription;
      this.taskData.debut = this.taskDebut;
      this.taskData.fin = this.taskFin;
      this.taskData.etat = this.taskEtat;
      this.taskData.priorite = this.taskPriorite;

      localStorage.setItem("tasks", JSON.stringify([this.taskData]));

      alert("Tâche modifiée.");
      this.resetForm();
    },

    resetForm() {
      localStorage.removeItem("modif");
      this.taskDescription = "";
      this.taskDebut = "";
      this.taskFin = "";
      this.taskEtat = "";
      this.taskPriorite = "";
    },
  },
};
</script>

<style scoped>
form {

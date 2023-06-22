<template>
    <div class="task-info">
      <div class="data-column">
        <label for="nom">Nom de la tâche</label>
        <p id = "nom">{{ data.nom }}</p>
      </div>
      <div class="data-column">
        <label for="description">Description</label>
        <p id="description">{{ data.description }}</p>
      </div>
      <div class="data-column">
        <label for="dateDeb">Date de début</label>
        <p id="dateDeb">{{ data.debut }}</p>
      </div>
      <div class="data-column">
        <label for="dateFin">Date de fin</label>
        <p id="dateFin">{{ data.fin }}</p>
      </div>
      <div class="data-column">
        <label for="etat">Etat</label>
        <p id="etat">{{ data.etat }}</p>
      </div>
      <div class="data-column">
        <label for="prio">Priorité</label>
        <p id="prio">{{ data.priorite }}</p>
      </div>
      <div class="data-column" v-if="this.data.etat != this.state">
        <label for="switchInput">Tâche terminée ?</label>
        <p id="switchInput"><input type="checkbox" v-model="isChecked" class="switch-input" @change="changeEtat"/></p>
      </div>
      <div class="data-column" v-if="this.data.etat != this.state">
        <RouterLink to='/modification'><a id="crayon" @click="modifier"><img id="crayonIcon" src="src/components/icons/crayon.png" alt="Modifier la tâche"></a></RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props : ['data'],
    data(){
      return{
        isChecked : false,
        done : [], 
        modif : [],
        state : "terminée"
      }
    },
    created(){
      const savedTasks = localStorage.getItem('done');
      if (savedTasks) {
        this.done = JSON.parse(savedTasks);
      }
      console.log("Tâches terminées : ", this.done);
    },
    methods:{
      changeEtat(){
        this.data.etat = "terminée";
        this.data.dateFin = new Date().toLocaleDateString();
        this.done.push(this.data);
        localStorage.setItem('done', JSON.stringify(this.done));
        console.log("Tâches terminées : ", this.done)
        localStorage.removeItem('tasks', JSON.stringify(this.data.id));
        alert("Tâche " + this.data.nom +" terminée.")  
        window.location.reload();
      }, 

      modifier(){
        localStorage.removeItem('modif');
        this.modif.push(this.data);
        localStorage.setItem('modif', this.modif);
        console.log("Tâche à modifier : ", this.modif);
      }
    },
  }
  </script>
  
  <style scoped>

  .icon{
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }
  .task-info{
    font-family: 'ailerons', sans-serif;
    color: white;
    margin-bottom: 2rem;
    display: flex;
    width: 75rem;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background-color: #481C4B;
    border-radius: 10px;
  }

  .task-info label{
    font-weight: bold;
    margin-top: 1rem;
  }

  .data-column{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
  }

  .data-column:last-of-type{
    margin-right: 3rem;
    
  }

  .switch-input{
    width: 50px;
    height: 15px;
    margin-right: 1rem;
  }

  #crayonIcon{
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }

  </style>

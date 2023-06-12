<template>
    <div class="container">
      <div class="task-info">
        <p>nom : {{ data.nom }}</p>
        <p>description : {{ data.description }}</p>
        <p>date de début : {{ data.debut }}</p>
        <p>date de fin : {{ data.fin }}</p>
        <p>état : {{ data.etat }}</p>
        <p>priorité : {{ data.priorite }}</p>
        <input v-if="this.data.etat != this.state" id="switchInput" type="checkbox" v-model="isChecked" class="switch-input" @change="changeEtat"/>
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
      }
    },
  }
  
  
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
    font-family: 'ailerons', sans-serif;
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

  .switch-input{
    margin-left: 1rem;
    width: 50px;
    height: 25px;
    border-radius: 10px;
  }

  </style>

<template>
    <div class="container">
      <div class="task-info">
        <p>nom : {{ data.nom }}</p>
        <p>description : {{ data.description }}</p>
        <p>date de début : {{ data.debut }}</p>
        <p>date de fin : {{ data.fin }}</p>
        <p>état : {{ data.etat }}</p>
        <p>priorité : {{ data.priorite }}</p>
        <RouterLink to="/modification"><a id="crayon" @click="modifier"><img id="crayonIcon" src="src/components/icons/crayon.png" alt="Modifier la tâche"></a></RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props : ['data'],
    // methods: {
    //   modifier(tasks) {
    //     this.$router.push(`/modification`);
    //   }
    // }
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

  #crayonIcon{
    width: 30px;
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
    align-items: center;
  }

  .task-info p:first-of-type{
    font-weight: bold;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .task-info p{
    margin-right: 1rem;
  }
  </style>

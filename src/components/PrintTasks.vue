<template>
    <div class="container">
      <div class="task-info">
        <p>nom : {{ data.nom }}</p>
        <p>description : {{ data.description }}</p>
        <p>date de début : {{ data.debut }}</p>
        <p>date de fin : {{ data.fin }}</p>
        <p>état : {{ data.etat }}</p>
        <p>priorité : {{ data.priorite }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props : ['data'],
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
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    background-color: wheat;
    border-radius: 10px;
  }

  .task-info p:first-of-type{
    font-weight: bold;
    margin-right: 1rem;
  }
  </style>

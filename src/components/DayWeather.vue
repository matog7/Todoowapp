<template>
    <div class="container">
      <div class="weather-image">
        <img class="icon" :src="'src/components/icons/' + data.weather[0].main + '.png'" alt="weather" />
      </div>
      <div class="weather-info">
        <h3>{{new Date(data.dt * 1000).toLocaleDateString(
            'fr-FR', {year: 'numeric', month: 'long', day: 'numeric'}) 
          }}</h3>
        <p>Temperature : {{ Math.round(data.temp.day)}}°C</p>
        <p>Météo : {{ data.weather[0].description }}</p>
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
  }

  .icon{
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }
  .weather-info{
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
  }
  </style>

<template>
  <div class="weather-info">
      <img class="icon" :src="'src/components/icons/' + data.weather[0].main + '.png'" alt="weather" />
      <p>Temperature : {{ Math.round(data.temp.day)}}°C</p>
      <p>Météo : {{ data.weather[0].description }}</p>
      <button class="style-button" @click="toggleMenu">
        {{ visible ? 'Fermer le menu' : 'Infos complémentaires' }}
      </button>
      <div class="toggled-menu" v-if="visible">
        <h3>Informations complémentaires</h3>
        <p>Température ressentie : {{ Math.round(data.feels_like.day)}}°C</p>
        <p>Température minimale : {{ Math.round(data.temp.min)}}°C</p>
        <p>Température maximale : {{ Math.round(data.temp.max)}}°C</p>
        <p>Humidité : {{ data.humidity }}%</p>
        <p>Vitesse du vent : {{ data.speed }} km/h</p>
        <p>Pression : {{ data.pressure }} hPa</p>
      </div>
  </div>
</template>

<script>
export default {
  props : ['data', 'city'],
  data(){
    return {
      visible: false
    }
  },
  methods: {
    toggleMenu(){
      this.visible = !this.visible;
    }  
  }
}


</script>


<style scoped>
.weather-info {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

.icon{
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.toggled-menu {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
.style-button {
  background-color: #43A047;
  border: none;
  color: white;
  margin-top: 1rem;
  text-align: center;
  padding: 5px 10px;
  width: 8rem;
  border-radius: 10px;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>

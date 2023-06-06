<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <img alt="Vue logo" class="logo" src="@/img/logo.png"/>
        <div class="router">
          <p><RouterLink to="/">Accueil</RouterLink></p>
          <p><RouterLink to="/creation">Créer tâche</RouterLink></p>
          
        </div>
      </nav>
  </header>

   <RouterView /> <!-- code envoyé selon la page choisi dans la barre de navigation -->

  <footer>
      <p class="description">Todoowapp, gérez vos tâches en toute sérénité.</p>
      <p class="description">&copy; Auger Matéo | Posselt Timothée - IUT de Vannes 2023 </p>
  </footer>

</template>

<style scoped>
.logo{
  width: 450px;
  height: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.router{
  display: flex;
  flex-direction: row;
  align-items: center;

}

footer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 2rem;
}

.description{
  font-style: italic;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 2
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.description{
  font-style: italic;
  font-size: 14px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2); 
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>

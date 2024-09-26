<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><nuxt-link to="/">Inicio</nuxt-link></li>
          <li><nuxt-link to="/tareas">Tareas</nuxt-link></li>
          <li><nuxt-link to="/amigos">Amigos</nuxt-link></li>
          <li><nuxt-link to="/login">Iniciar Sesión</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <nuxt />
    <footer>
      <p>&copy; 2024 - Mi Lista de Tareas Compleja</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('App mounted');
  },
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #5c6bc0;
  padding: 20px;
  margin-bottom: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

nav ul li a:hover {
  text-decoration: underline;
}

footer {
  margin-top: 40px;
  padding: 20px;
  background-color: #3949ab;
  color: white;
}

footer p {
  margin: 0;
  font-size: 0.9rem;
}
</style>

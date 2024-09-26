<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Inicio</nuxt-link></li>
        <li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
        <li><nuxt-link to="/login">Iniciar Sesión</nuxt-link></li>
        <li><nuxt-link to="/register">Registrarse</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  background-color: #4caf50;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

nav ul li {
  color: white;
  text-decoration: none;
}
</style>

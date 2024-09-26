<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Lista de Tareas</nuxt-link></li>
        <li><nuxt-link to="/register">Registrar</nuxt-link></li>
        <li><nuxt-link to="/login">Iniciar Sesión</nuxt-link></li>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>

<style scoped>
nav {
  background: #5c6bc0;
  padding: 10px;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin: 0 15px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>

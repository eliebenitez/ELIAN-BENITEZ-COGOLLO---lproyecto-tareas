<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="login">
      <input
        type="text"
        v-model="credentials.username"
        placeholder="Nombre de usuario"
        required
      />
      <input
        type="password"
        v-model="credentials.password"
        placeholder="Contraseña"
        required
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/api/login', this.credentials);
        console.log('Inicio de sesión exitoso:', response.data);
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Registrar</h1>
    <form @submit.prevent="register">
      <input
        type="text"
        v-model="user.username"
        placeholder="Nombre de usuario"
        required
      />
      <input type="text" v-model="user.career" placeholder="Carrera" required />
      <input
        type="password"
        v-model="user.password"
        placeholder="Contraseña"
        required
      />
      <button type="submit">Registrar</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        career: '',
        password: '',
      },
      errorMessage: '', // Para mostrar mensajes de error
    };
  },
  methods: {
    async register() {
      console.log('Intentando registrar:', this.user); // Verifica los datos que se envían
      try {
        const response = await this.$axios.post('/api/register', this.user);
        console.log('Registro exitoso:', response.data); // Verifica la respuesta del servidor
      } catch (error) {
        console.error('Error al registrarse:', error); // Muestra el error en la consola
        console.log('Detalles del error:', error.response); // Muestra detalles adicionales del error
        this.errorMessage = error.response
          ? error.response.data.message
          : 'Error desconocido';
      }
    },
  },
};
</script>

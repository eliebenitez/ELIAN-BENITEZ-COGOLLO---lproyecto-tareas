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
    };
  },
  methods: {
    async register() {
      try {
        const response = await this.$axios.post('/api/register', this.user);
        console.log('Registro exitoso:', response.data);
      } catch (error) {
        console.error('Error al registrarse:', error);
      }
    },
  },
};
</script>

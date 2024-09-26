<template>
  <form @submit.prevent="submit">
    <input type="email" v-model="email" placeholder="Email" required />
    <input
      type="password"
      v-model="password"
      placeholder="Contraseña"
      required
    />
    <button type="submit">Iniciar Sesión</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      this.$emit('login', {
        email: this.email,
        password: this.password,
      });
      this.email = '';
      this.password = '';
    },
  },
};
</script>

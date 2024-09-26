<template>
  <div>
    <Header />
    <h1>Página Principal</h1>
    <p>Bienvenido, {{ user.email }}!</p>
    <button @click="logout">Cerrar Sesión</button>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    ...mapActions(['logout']),
  },
  beforeRouteEnter(to, from, next) {
    // Redirigir si no está autenticado
    if (!store.getters.isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  },
};
</script>

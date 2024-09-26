import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const state = () => ({
  user: null,
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

export const actions = {
  async register({ commit }, userData) {
    try {
      const response = await axios.post('/api/register', userData);
      commit('SET_USER', response.data.user); // Asegúrate de que la respuesta contenga el usuario
    } catch (error) {
      console.error('Error de registro:', error);
      throw new Error(error.response?.data?.message || 'Error al registrarse');
    }
  },
};

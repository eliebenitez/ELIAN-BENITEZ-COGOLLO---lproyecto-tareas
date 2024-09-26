<template>
  <div>
    <h2>Lista de Amigos</h2>
    <ul>
      <li v-for="friend in friends" :key="friend.id">
        {{ friend.name }} -
        <span :class="{ online: friend.online, offline: !friend.online }">
          {{ friend.online ? 'En línea' : 'Desconectado' }}
        </span>
        <button @click="openChat(friend.id)">Chatear</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      friends: (state) => state.friends.friends,
    }),
  },
  methods: {
    openChat(friendId) {
      this.$emit('open-chat', friendId);
    },
  },
};
</script>

<style scoped>
.online {
  color: green;
}
.offline {
  color: red;
}
</style>

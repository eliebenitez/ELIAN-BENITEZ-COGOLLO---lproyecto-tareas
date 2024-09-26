<template>
  <div v-if="friend">
    <h3>Chat con {{ friend.name }}</h3>
    <div class="messages">
      <p v-for="(message, index) in messages" :key="index">{{ message }}</p>
    </div>
    <input v-model="newMessage" placeholder="Escribe un mensaje" />
    <button @click="sendMessage">Enviar</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    friendId: Number,
  },
  data() {
    return {
      newMessage: '',
    };
  },
  computed: {
    ...mapGetters({
      getMessages: 'friends/getMessages',
    }),
    messages() {
      return this.getMessages(this.friendId);
    },
    friend() {
      return this.$store.state.friends.friends.find(
        (f) => f.id === this.friendId
      );
    },
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.$store.dispatch('friends/sendMessage', {
          friendId: this.friendId,
          message: this.newMessage,
        });
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
.messages {
  border: 1px solid #ccc;
  padding: 10px;
  max-height: 200px;
  overflow-y: scroll;
}
</style>

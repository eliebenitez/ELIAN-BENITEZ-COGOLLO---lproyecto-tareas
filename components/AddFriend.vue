<template>
  <div class="add-friend">
    <input v-model="friendName" placeholder="Agregar un amigo" />
    <button @click="submitFriend">Agregar Amigo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friendName: '',
    };
  },
  methods: {
    submitFriend() {
      if (this.friendName.trim()) {
        this.$emit('add-friend', { name: this.friendName, online: false });
        this.friendName = '';
      } else {
        alert('Debes ingresar un nombre de amigo');
      }
    },
  },
};
</script>

<style scoped>
.add-friend {
  margin: 20px 0;
}
</style>

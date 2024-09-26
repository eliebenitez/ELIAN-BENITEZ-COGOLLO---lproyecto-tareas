<template>
  <li>
    <span class="task-text">{{ task }}</span>
    <button class="remove-btn" @click="$emit('removeTask')">Eliminar</button>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para el TaskItem si es necesario */
</style>

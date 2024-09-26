<template>
  <div class="task-list">
    <h3>Tareas</h3>
    <ul>
      <li v-for="task in tasks" :key="task.name">
        {{ task.name }} - Fecha de entrega: {{ task.dueDate }}
        <button @click="completeTask(task)">Marcar como completada</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  methods: {
    completeTask(task) {
      this.$emit('complete-task', task);
    },
  },
};
</script>

<style scoped>
.task-list {
  margin-top: 20px;
}
</style>

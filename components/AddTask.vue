<template>
  <div class="add-task">
    <input v-model="newTask" placeholder="Agregar una tarea" />
    <input v-model="dueDate" type="date" placeholder="Fecha de entrega" />
    <button @click="submitTask">Agregar Tarea</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      dueDate: '',
    };
  },
  methods: {
    submitTask() {
      if (this.newTask.trim() && this.dueDate) {
        this.$emit('add-task', {
          name: this.newTask,
          dueDate: this.dueDate,
          completed: false,
        });
        this.newTask = '';
        this.dueDate = '';
      } else {
        alert('Debes ingresar una tarea y una fecha de entrega');
      }
    },
  },
};
</script>

<style scoped>
.add-task {
  margin-bottom: 20px;
}
</style>

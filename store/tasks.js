export const state = () => ({
  tasks: [],
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks.push(task);
  },
  COMPLETE_TASK(state, task) {
    const index = state.tasks.findIndex((t) => t.name === task.name);
    if (index !== -1) state.tasks[index].completed = true;
  },
};

export const actions = {
  addTask({ commit }, task) {
    commit('ADD_TASK', task);
  },
  completeTask({ commit }, task) {
    commit('COMPLETE_TASK', task);
  },
};

export const getters = {
  tasks: (state) => state.tasks,
};

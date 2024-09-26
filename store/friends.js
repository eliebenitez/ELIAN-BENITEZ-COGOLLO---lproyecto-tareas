export const state = () => ({
  friends: [
    { id: 1, name: 'Amigo 1', online: true },
    { id: 2, name: 'Amigo 2', online: false },
  ],
  messages: {},
});

export const mutations = {
  ADD_FRIEND(state, friend) {
    const id = state.friends.length
      ? Math.max(state.friends.map((f) => f.id)) + 1
      : 1;
    state.friends.push({ id, ...friend });
  },
  ADD_MESSAGE(state, { friendId, message }) {
    if (!state.messages[friendId]) {
      state.messages[friendId] = [];
    }
    state.messages[friendId].push(message);
  },
};

export const actions = {
  addFriend({ commit }, friend) {
    commit('ADD_FRIEND', friend);
  },
  sendMessage({ commit }, { friendId, message }) {
    commit('ADD_MESSAGE', { friendId, message });
  },
};

export const getters = {
  getMessages: (state) => (friendId) => {
    return state.messages[friendId] || [];
  },
};

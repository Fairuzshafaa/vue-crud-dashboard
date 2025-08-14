const state = () => ({
  user: null, // { name, email, role, avatar }
});

const getters = {
  isLoggedIn: (s) => !!s.user,
  user: (s) => s.user,
};

const actions = {
  login({ commit }, { email, password }) {
    const MOCK = { email: "karthi@gmail.com", password: "123456" };
    if (email === MOCK.email && password === MOCK.password) {
      commit("SET_USER", {
        name: "Karthi Madesh",
        email,
        role: "Admin",
        avatar: require("../../assets/avatar.jpg"),
      });
      return true;
    }
    return false;
  },
  logout({ commit }) {
    commit("SET_USER", null);
  },
};

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
};

export default { namespaced: true, state, getters, actions, mutations };

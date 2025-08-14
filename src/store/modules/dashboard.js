export default {
  namespaced: true,
  state: () => ({
    stats: {
      students: 243,
      courses: 13,
      paymentsLabel: "INR",
      payments: 556000,
      users: 3,
    },
    users: [
      {
        name: "Karthi",
        email: "karthi@gmmail.com",
        phone: "7305477760",
        enroll: "1234567305477760",
        date: "08-Dec, 2021",
        avatar: require("../../assets/avatar.jpg"),
      },
      {
        name: "Karthi",
        email: "karthi@gmmail.com",
        phone: "7305477760",
        enroll: "1234567305477760",
        date: "08-Dec, 2021",
        avatar: require("../../assets/avatar.jpg"),
      },
      {
        name: "Karthi",
        email: "karthi@gmmail.com",
        phone: "7305477760",
        enroll: "1234567305477760",
        date: "08-Dec, 2021",
        avatar: require("../../assets/avatar.jpg"),
      },
      {
        name: "Karthi",
        email: "karthi@gmmail.com",
        phone: "7305477760",
        enroll: "1234567305477760",
        date: "08-Dec, 2021",
        avatar: require("../../assets/avatar.jpg"),
      },
    ],
  }),
  getters: {
    stats: (state) => state.stats,
    users: (state) => state.users,
  },
  mutations: {
    updateUser(state, { index, user }) {
      state.users.splice(index, 1, user);
    },
    deleteUser(state, index) {
      state.users.splice(index, 1);
    },
  },
  actions: {
    updateUser({ commit }, payload) {
      commit("updateUser", payload);
    },
    deleteUser({ commit }, index) {
      commit("deleteUser", index);
    },
  },
};

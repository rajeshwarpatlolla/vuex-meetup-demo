import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // strict: true,
  state: {
    list: [{ name: 'apple', price: 40000 }, { name: 'mi', price: 20000 }],
  },
  getters: {
    listOfItems: state => state.list,
  },
  mutations: {
    addNewItem: (state, item) => {
      state.list.push(item);
    },
  },
  actions: {
    addNewItemAction: (state) => {
      state.commit('addNewItem', { name: 'samsung', price: 30000 });
    },
  },
});

export default store;

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: [{ name: 'apple', price: 40000 }, { name: 'mi', price: 20000 }],
  },
  getters: {
    listOfItems: state => state.list,
  },
});

export default store;

<template>
  <div class="ListComponent">
    <h2>This is ListComponent</h2>
    <div v-for="(item, index) of listOfItems" :key="index">
      {{item.name}} - {{item.price}}
    </div>
    <button @click="addNewItem()">Add new</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
	name: 'ListComponent',
	data() {
		return {};
  },
  computed:{
    ...mapGetters([
      'listOfItems'
    ]),
  },
  methods:{
    ...mapActions([
      'addNewItemAction'
    ]),
    addNewItem(){
      this.addNewItemAction({ name: 'samsung', price: 30000 });
    }
  },
};
</script>

<style scoped>
</style>

<template>
  <div class="ListComponent">
    <h2>This is ListComponent</h2>
    <div v-for="(item, index) of listOfItems" :key="index">
      {{item.name}} - {{item.price}}
    </div>
    <button @click="addNewItemAction()">Add new</button>
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
  },
};
</script>

<style scoped>
</style>

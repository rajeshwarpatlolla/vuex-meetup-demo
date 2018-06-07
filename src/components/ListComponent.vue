<template>
  <div class="ListComponent">
    <h2>This is ListComponent</h2>
    <div v-for="(item, index) of list" :key="index">
      {{item.name}} - {{item.price}}
    </div>
    <button @click="addNewProduct()">Add new</button>
  </div>
</template>

<script>
export default {
	name: 'ListComponent',
	data() {
		return {};
  },
  computed:{
    list(){
      return this.$store.getters.listOfItems;
    }
  },
  methods:{
    addNewProduct(){
      this.$store.commit('addNewItem',{ name: 'samsung', price: 30000 });
    },
  },
};
</script>

<style scoped>
</style>

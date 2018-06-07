<template>
	<div class="ListComponent">
		<h2>This is ListComponent</h2>
    <div v-for="(item, index) of list" :key="index">
      {{item.name}} - {{item.price}}
    </div>
	</div>
</template>

<script>
export default {
	name: 'ListComponent',
	data() {
		return {};
  },
  props:['list'],
};
</script>

<style scoped>
</style>

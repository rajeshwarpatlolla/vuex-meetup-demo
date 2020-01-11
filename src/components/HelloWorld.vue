<template>
  <div class="hello">
    <h2>This is home component.</h2>
    <ListComponent/>
  </div>
</template>

<script>
import ListComponent from './ListComponent';

export default {
	name: 'HelloWorld',
	data() {
		return {};
	},
	components:{ListComponent},
};
</script>

<style scoped>
</style>

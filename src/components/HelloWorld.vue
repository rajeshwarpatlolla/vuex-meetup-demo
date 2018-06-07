<template>
  <div class="hello">
    <h2>This is home component</h2>
    <ListComponent :list="list"/>
  </div>
</template>

<script>
import ListComponent from './ListComponent';

export default {
	name: 'HelloWorld',
	data() {
		return {
      list:[
        {name:'apple', price:40000},
        {name:'mi', price:20000}
      ]
    };
	},
	components:{ListComponent},
};
</script>

<style scoped>
</style>

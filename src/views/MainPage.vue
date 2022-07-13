<template>
	<Header/>
	<main>
		<router-view></router-view>
	</main>
</template>

<script>
import Header from '../components/Header'
export default {
	name: "MainPage",
	components:{
		Header
	},
}
</script>

<style scoped>

</style>
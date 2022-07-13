<template>
	<Toolbar>
		<template #start>
			<div v-if="$store.state.user">
				<Button class="p-button-text" @click="$router.push('/main/home')">Home</Button>
				<!-- <router-link class="p-button-text" to="/"></router-link> | -->
				<Button class="p-button-text" @click="$router.push('/main/about')">About</Button>
				<!--<router-link class="p-button-text" to="/about">About</router-link>  -->
			</div>

		</template>
		<template #end>
			<Button v-if="$store.state.user" class="p-button-danger p-button-rounded" @click="$store.dispatch('logout')"> Logout </Button>
			<Button v-if="!$store.state.user" class="p-button-info p-button-rounded" @click="$router.push('/login')"> Login </Button>
		</template>

	</Toolbar>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
	name: "Header",
	setup(){
		const store = useStore()

		onBeforeMount(()=>{
			store.dispatch('fetchUser')
		})

	}
}
</script>

<style scoped>

</style>
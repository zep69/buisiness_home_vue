<template>
	<Toolbar >
		<template #start>
			<div v-if="$store.state.user">
				<!-- <Button class="p-button-text p-ripple" @click="$router.push('/main/home')">Home</Button> -->
				<!-- <router-link class="p-button-text" to="/"></router-link> | -->
				<!-- <Button class="p-button-text p-ripple" @click="$router.push('/main/about')">About</Button> -->
				<Button icon="pi pi-bars p-ripple" class="p-button-rounded  p-button-text" @click="visibleLeft = true"></Button>
				<!--<router-link class="p-button-text" to="/about">About</router-link>  -->
			</div>

		</template>
		<template #end>
			<Button v-if="$store.state.user" class="p-button-danger p-button-rounded" @click="$store.dispatch('logout')"> Logout </Button>
			<Button v-if="!$store.state.user" class="p-button-info p-button-rounded" @click="$router.push('/login')"> Login </Button>
		</template>

	</Toolbar>
	<Sidebar v-model:visible="visibleLeft"  :baseZIndex="10000">
		<h3>Меню</h3>
		<div style="margin-top: 1rem;" v-for="(item, index) in menuItems">
			<Button :icon="item.icon" class="p-button-text" :label="index+1 + '.'+item.name"  @click="$router.push(item.router); visibleLeft=false"></Button>
		</div>

	</Sidebar>
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

	},
	data(){
		return{
			visibleLeft:false,
			selectedMenu: null,
			menuItems:[
				{
						name:'Бюджет', router:'/main/home', icon: 'pi pi-wallet'
				},
				{
					name: 'ToDo', router: '/main/about', icon:'pi pi-check-square'
				}
			]
		}
	}
}
</script>

<style scoped>

</style>
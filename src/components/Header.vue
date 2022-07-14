<template>
	<Toolbar >
		<template #start>
			<div v-if="$store.state.user">
				<Button class="p-button-text p-ripple" @click="$router.push('/main/home')">Home</Button>
				<!-- <router-link class="p-button-text" to="/"></router-link> | -->
				<Button class="p-button-text p-ripple" @click="$router.push('/main/about')">About</Button>
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
		<Listbox v-model="selectedMenu" :options="menuItems" @click="$router.push(menuItems.router)" >
			<template #option="slotProps">
				<div @click="$router.push(slotProps.option.router)">
					<div>{{slotProps.option.name}}</div>
				</div>
			</template>
		</Listbox>
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
						name:'Бюджет', router:'/main/home'
				},
				{
					name: 'ToDo', router: '/main/about'
				}
			]
		}
	}
}
</script>

<style scoped>

</style>
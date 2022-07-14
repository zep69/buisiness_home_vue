<template>
	<main class="login">
		<div class="p-card logreg">
			<TabView>
		<section class="forms">
			<TabPanel>
				<template #header>
					<i class="pi pi-sign-in"></i>
					<span> Войти</span>
				</template>
				<div class="p-card" style="margin-top: 1rem;">
					<form class="" @submit.prevent="login" style="padding: 1rem">
						<h2>Войти в систему</h2>
						<div style="margin-top: 0.5rem">
						<input class="p-inputtext" type="email" placeholder="Email" v-model="login_form.email"/>
						<input class="p-inputtext" type="password" placeholder="password" v-model="login_form.password"/>
						<input	class="p-button " type="submit" value="Login"/>
						</div>
					</form>
				</div>
			</TabPanel>


			<TabPanel>
				<template #header>
					<i class="pi pi-user-plus"></i>
					<span> Зарегистрироваться</span>
				</template>
			<div class="p-card"  style="margin-top: 1rem;">
			<form  class="register" @submit.prevent="register" style="padding: 1rem">
				<h2>Регистрация</h2>
				<div style="margin-top: 0.5rem;">
				<input class="p-inputtext" type="email" placeholder="Email" v-model="register_form.email"/>
				<input class="p-inputtext" type="password" placeholder="password" v-model="register_form.password"/>
				<input	class="p-button " type="submit" value="Register"/>
				</div>
			</form>
		</div>
			</TabPanel>

		</section>
			</TabView>
		</div>
	</main>

</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
	name: "Login",
	setup (){
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();

		const login = () => {
			store.dispatch('login', login_form.value)
		}

		const register = () => {
			store.dispatch('register', register_form.value)
		}

		return{
			login_form,
			register_form,
			login,
			register
		}
	}
}
</script>

<style scoped>
section{

}
.logreg{
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%)
}
span{

	margin:0.5rem;
}
input{
	margin: 0.5rem;
}

</style>
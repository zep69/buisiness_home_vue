<template>
	<div class="page">
		<Card style="margin-top: 1rem; margin-bottom: 1rem; border-radius: 2rem">
			<template #header>
				<h2>Создать задачу</h2>
			</template>
			<template #content>
				<input type="text" placeholder="Заголовок Задачи" class="p-inputtext" v-model="headerTodos">
				<br>
				<Textarea style="margin-top: 0.7rem;" placeholder="Опишите задачу" v-model="contentTodos"/>

			</template>

			<template #footer>
				<div style="display: flex; justify-content: space-between">
				<Button class="p-button-text">Clear</Button>
				<Button class="p-button-rounded p-button-success" @click="addTodos(headerTodos, contentTodos, user.uid)">Добавить задачу</Button>
				</div>
			</template>

		</Card>
		<div v-for="item in todoFb">
			<div class="p-card" style="border-radius: 1rem">
				<div class="p-card-title" style="margin-top: 1rem; padding-top: 0.5rem;">{{item.header}}</div>
				<div class="p-card-content" style="display: flex; justify-content: space-between; padding: 1rem">
					<h3>{{item.content}}</h3>
					<input class="p-checkbox" type="checkbox" v-model="item.check" @change="updateTodos(item.id)">
				</div>
			</div>
		</div>
		<!-- <DataTable :value="dataTodo" :loading="loading" :paginator="true" :rows="10">
		<template	#header>
			Задачи на выполнение
		</template>
		<Column field="complete" header="Готовность"> </Column>
		<Column field="id" header="Номер задачи"></Column>
		<Column field="userId" header="Кто создал"></Column>
		<Column field="title" header="Описание"></Column>
	</DataTable> -->

	</div>
</template>
<script>
import { collection, getDocs, doc, setDoc,  query, where, onSnapshot, addDoc, updateDoc } from "firebase/firestore";
import {db, auth} from '../firebase'


export default {
	data(){
		return{
			dataTodo:null,
			dataUsers:null,
			loading:true,
			todoFb:[],
			headerTodos:null,
			contentTodos: null,
			user:null
		}
	},
	async mounted(){
		await this.getTodo()
		this.user = auth.currentUser
		console.log(this.user.uid)
		await this.getUsers()
	/*	for(let i = 0; i< this.dataTodo.length; i++){
			for(let j =0; j<this.dataUsers.length; j++){
				if (this.dataTodo[i].userId === this.dataUsers[j].id){
					this.dataTodo[i].userId = this.dataUsers[j].name
					break
				}else continue
			}
		}*/
		this.loading = false
		await this.getFbTodos(this.user.uid)


	},
	methods:{
		async getTodo(){
			let request = await fetch('https://jsonplaceholder.typicode.com/todos')
			this.dataTodo = await request.json()
		},
		async getUsers(){
			let request = await fetch('https://jsonplaceholder.typicode.com/users')
			this.dataUsers = await request.json()
		},
		async getFbTodos(userUid){
			/*
			const querySnapshot = await getDocs(collection(db, "todos"));
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
				let todos = {
					id: doc.id,
					header: doc.data().header,
					content: doc.data().content
				}
				this.todoFb.push(todos)
			});
			 */


			const q = await query(collection(db, "todos"));
			const unsubscribe = onSnapshot(q, (querySnapshot) => {
				this.todoFb=[]

				querySnapshot.forEach((doc) => {
					if(!doc.data().check && doc.data().user===userUid){
						let todos = {
							id: doc.id,
							header: doc.data().header,
							content: doc.data().content,
							check: doc.data().check
						}
						this.todoFb.push(todos)
					}

				});

			});

		},
		async addTodos(header, content, userUid){
			if(header!=null || content!=null){
				const docRef = await addDoc(collection(db, "todos"), {
					header: header,
					content: content,
					user: userUid
				});
			} else alert('Зполните поля')

			this.headerTodos=null
			this.contentTodos=null

		},
		async updateTodos(id){
			const todos = doc(db, "todos", id);

			await updateDoc(todos, {
				check: true
			});
		}
	},

}
</script>
<style>
.page{
	width: 35rem;max-width: 45rem;position: absolute; left: 50%;margin-right: -50%;transform: translate(-50%);
}
@media  screen and (max-width: 768px){
	.page{ max-width: 24rem;}

}
</style>

<template>
	<div style="max-width: 45rem;position: absolute; left: 50%;margin-right: -50%;transform: translate(-50%)">
		<Card style="margin-top: 1rem; margin-bottom: 1rem; border-radius: 2rem">
			<template #header>
				<h2>Создать задачу</h2>
			</template>
			<template #content>
				<input type="text" placeholder="Как вас зовут" class="p-inputtext">
				<br>
				<Textarea style="margin-top: 0.7rem;" placeholder="Опишите задачу"/>

			</template>

			<template #footer>
				<div style="display: flex; justify-content: space-between">
				<Button class="p-button-text">Clear</Button>
				<Button class="p-button-rounded p-button-success">Добавить задачу</Button>
				</div>
			</template>

		</Card>
	<DataTable :value="dataTodo" :loading="loading" :paginator="true" :rows="10">
		<template	#header>
			Задачи на выполнение
		</template>
		<Column field="complete" header="Готовность"> </Column>
		<Column field="id" header="Номер задачи"></Column>
		<Column field="userId" header="Кто создал"></Column>
		<Column field="title" header="Описание"></Column>
	</DataTable>
	</div>
</template>
<script>

export default {
	data(){
		return{
			dataTodo:null,
			dataUsers:null,
			loading:true
		}
	},
	async mounted(){
		await this.getTodo()
		await this.getUsers()
		for(let i = 0; i< this.dataTodo.length; i++){
			for(let j =0; j<this.dataUsers.length; j++){
				if (this.dataTodo[i].userId === this.dataUsers[j].id){
					this.dataTodo[i].userId = this.dataUsers[j].name
					break
				}else continue
			}
		}
		this.loading = false
	},
	methods:{
		async getTodo(){
			let request = await fetch('https://jsonplaceholder.typicode.com/todos')
			this.dataTodo = await request.json()
		},
		async getUsers(){
			let request = await fetch('https://jsonplaceholder.typicode.com/users')
			this.dataUsers = await request.json()
		}
	}
}
</script>

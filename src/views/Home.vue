<template>
	<!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
	<div class="page">
		<div class="p-card" style="padding-top: 1rem; padding-bottom: 1rem;margin-top: 1rem; border-radius: 3rem">
	<div>
		<div v-if="pickDateRange" class="field" style="display: block; margin-top: 1rem;">
			Бюджет за отрезок <br>
			<Calendar id="range" v-model="date" selectionMode="range" :manualInput="false" />
		</div>
		<div v-if="!pickDateRange" class="field" style="display: block; margin-top: 1rem;">
			Бюджет за месяц <br>
			<Calendar id="monthpick" v-model="date" view="month" dateFormat="mm/yy" />
		</div>
	</div>

	<div style="display: flex; justify-content: center; margin-top: 5px; align-content: center">
		<span style="margin-right: 5px;">Range</span>
		<input class="p-checkbox" type="checkbox"  v-model="pickDateRange" @change="!pickDateRange">

	</div>
	<div style="display: flex; justify-content: center;">
		<div style="max-width: 20rem;">
			<Chart style="" type="doughnut" :data="chartData" :options="lightOptions" />
		</div>
	</div>
		</div>

	<div style="display: flex; justify-content: center; margin-top: 1rem;">
		<div class="p-toolbar" style="width:45rem; border-radius: 3rem; background-color: white">
			<div class="p-toolbar-group-left">
				<Button class="p-button-rounded">
					<i class="pi pi-plus" style="margin-right: 3px;"></i>
					 Добавить расходы </Button>
			</div>
			<div class="p-toolbar-group-right">
				<Button class="p-button-rounded p-button-danger">
					<i class="pi pi-trash" style="margin-right: 3px;" ></i>
					Удалить
				</Button>
			</div>
		</div>
	</div>
	<div class="p-card" style="padding: 0.5rem; margin-top: 1rem; border-radius: 3rem">
		<h2>Пакупачки</h2>
		<div style="display: flex; justify-content: space-around;margin-top: 1rem; margin-left: auto; margin-right: auto; ">
			<span>Дата</span>
			<span>Категория</span>
			<span>Стоимость</span>
		</div>

			<div v-for="item in pokupochki"  class="p-card" style="margin-left: auto; margin-right: auto;   margin-top: 0.5rem; max-width: 100%;  border-radius: 3rem ">
				<div class="p-card-content" style="display: flex; justify-content: space-between; padding: 1rem;">
					<span>{{item.date}}</span>
					<span>{{item.header}}</span>
					<span>{{item.summ}} р.</span>
				</div>
			</div>
	</div>
	</div>



</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { collection, getDocs, getDoc, doc, setDoc,  query, where, onSnapshot, addDoc, updateDoc } from "firebase/firestore";
import {db, auth} from '../firebase'


export default {
  name: 'Home',
  components: {
    //HelloWorld,
  },
	created() {
		let today = new Date();
			let	month = today.getMonth();
	},
	data(){
		return{
			date:new Date(),
			chartData: {
				labels: ['Преколы','Роллов','Свитбоксы'],
				datasets: [
					{
						data: [300, 50, 100,444,21,745],
						backgroundColor: ["#e16914","#36A2EB","#f456ff", "#5dea28", "#FFCE56","#FF6384"],
						hoverBackgroundColor: ["#e16914","#36A2EB","#f456ff", "#5dea28", "#FFCE56","#FF6384"]
					}
				]
			},
			lightOptions: {
				plugins: {
					legend: {
						labels: {
							color: '#495057'
						}
					}
				}
			},
			pickDateRange: false,
			pokupochki:[
				{
					header:'преколы',summ:1254,date:new Date().toLocaleString().substr(0,10),
				},
				{
					header:'свитбоксы',summ:2544,date:new Date().toLocaleString().substr(0,10),
				},
				{
					header:'роллов',summ:23232,date:new Date().toLocaleString().substr(0,10),
				},
				{
					header:'жопов',summ:45455,date:new Date().toLocaleString().substr(0,10),
				},
				{
					header:'преколы',summ:211,date:new Date().toLocaleString().substr(0,10),
				},
			]
		}

	},
	async mounted(){
		await this.getTypes()
	},
	methods:{
		async getMoney(){

		},
		async getTypes(){
			const docRef = doc(db, "money", "types");
			const docSnap = await getDoc(docRef);

			this.chartData.labels = [];
			if (docSnap.exists()){
				console.log(docSnap.data())
				let arrayTypes = docSnap.data()
				console.log('gavno',arrayTypes)
				for(let i=0; i<arrayTypes.type.length; i++){
					this.chartData.labels.push(arrayTypes.type[i])
				}
			console.log(this.chartData.labels)
			} else{
				alert('Ошибка')
			}
		}
	}
}
</script>
<style>
.page{
	width: 45rem;max-width: 45rem;position: absolute; left: 50%;margin-right: -50%;transform: translate(-50%);
}
</style>

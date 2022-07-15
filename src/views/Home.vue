<template>
	<!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
	<div class="field" style="display: block; margin-top: 2rem;">
		Бюджет за месяц <br>
		<Calendar id="monthpick" v-model="date" view="month" dateFormat="mm/yy" />
	</div>
	<div style="max-width: 20rem; position: absolute; left: 50%;margin-right: -50%;transform: translate(-50%) ">
		<Chart style="" type="doughnut" :data="chartData" :options="lightOptions" />
	</div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
	created() {
		let today = new Date();
			let	month = today.getMonth();
	},
	data(){
		return{
			date:new Date(),
			chartData: {
				labels: ['A','B','C'],
				datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
						hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
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
			}
		}

	}
}
</script>

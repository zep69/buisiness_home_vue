<template>
	<main>
		<router-view/>
	</main>

</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

import Header from "./components/Header"

export default {
	components:{
		Header
	},

}
</script>

<style>
*{
	margin:0;
	padding: 0;
	box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

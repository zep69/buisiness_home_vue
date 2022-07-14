import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from "primevue/config";


import Button from "primevue/button";
import Toolbar from "primevue/toolbar";

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Sidebar from 'primevue/sidebar';
import Listbox from 'primevue/listbox';

import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

const app = createApp(App);
app.use(store)
app.use(router)
app.use(PrimeVue,  {ripple: true})

app.component('Button', Button)
app.component('Toolbar', Toolbar)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Sidebar', Sidebar)
app.component('Listbox', Listbox)


app.mount('#app')

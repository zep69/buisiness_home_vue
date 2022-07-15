import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from "primevue/config";
import VueGoodTablePlugin from 'vue-good-table';


import Button from "primevue/button";
import Toolbar from "primevue/toolbar";

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Sidebar from 'primevue/sidebar';
import Listbox from 'primevue/listbox';
import Divider from 'primevue/divider';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';

import Chart from 'primevue/chart'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Textarea from 'primevue/textarea';
import Card from 'primevue/card';

import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"


const app = createApp(App);
app.use(store)
app.use(router)
app.use(PrimeVue,  {ripple: true})
app.use(VueGoodTablePlugin)

app.component('Button', Button)
app.component('Toolbar', Toolbar)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Sidebar', Sidebar)
app.component('Listbox', Listbox)
app.component('Divider', Divider)
app.component('Calendar', Calendar)
app.component('Chart', Chart)
app.component('DataTable', DataTable)
app.component('Column',Column)
app.component('Textarea', Textarea)
app.component('Card', Card)
app.component('InputText', InputText)






app.mount('#app')

import { createApp, defineAsyncComponent } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue'
import BaseBadge from './components/UI/BaseBadge.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseSpinner from './components/UI/BaseSpinner.vue'
// import BaseDialog from './components/UI/BaseDialog.vue'


// const BaseCard = defineAsyncComponent(() => import('./components/UI/BaseDialog.vue'));
// const BaseBadge = defineAsyncComponent(() => import('./components/UI/BaseDialog.vue'));
// const BaseButton = defineAsyncComponent(() => import('./components/UI/BaseDialog.vue'));
// const BaseDialog = defineAsyncComponent(() => import('./components/UI/BaseDialog.vue'));
// const BaseDialog = defineAsyncComponent(() => import('./components/UI/BaseDialog.vue'));

const app = createApp(App)

app.use(router)
app.use(store)

app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog)

app.mount('#app');

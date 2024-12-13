import { createApp } from 'vue';

import App from '~/App.vue';
import { router } from '~/router';

import './assets/scss/app.scss';

const instance = createApp(App);
instance.use(router);
router.isReady().then(() => {
    instance.mount('#app');
});

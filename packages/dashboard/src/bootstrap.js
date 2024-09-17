import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
   const app = createApp(Dashboard);
   app.mount(el);
}

// if we are in dev mode
if(process.env.NODE_ENV ==='development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if(devRoot) {
        mount(devRoot);
    }
}

// If we are running through container, we should export the mount function
export { mount }
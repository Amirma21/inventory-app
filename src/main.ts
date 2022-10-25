import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Notifications from '@kyvg/vue3-notification'
loadFonts()

createApp(App)
  .use(store)
  .use(vuetify).use(Notifications)
  .mount('#app')

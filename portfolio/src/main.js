import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMobileScreenButton,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'


library.add(
  faMobileScreenButton,
  faEnvelope,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')

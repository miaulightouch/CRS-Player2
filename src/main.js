// npm packages
import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faFacebook, faOdnoklassniki, faTwitch } from '@fortawesome/fontawesome-free-brands'
import {
  Vuetify,
  VApp,
  VBtn,
  VDialog,
  VDivider,
  VGrid,
  VIcon,
  VList,
  VMenu,
  VNavigationDrawer,
  VSnackbar,
  VSlider,
  VTabs,
  VTextField,
  VToolbar,
  transitions
} from 'vuetify'

// local files
import App from './App.vue'
import store from './store'

// setup Vuetify, theme generated from https://vuetifyjs.com/zh-Hans/theme-generator
import 'vuetify/src/stylus/app.styl'
Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VDialog,
    VDivider,
    VGrid,
    VIcon,
    VList,
    VMenu,
    VNavigationDrawer,
    VSnackbar,
    VSlider,
    VTabs,
    VTextField,
    VToolbar,
    transitions
  },
  theme: {
    primary: colors.teal.darken1,
    secondary: colors.grey.darken4,
    accent: colors.teal.darken3,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
  }
})

// show production tips in development
Vue.config.productionTip = process.env.NODE_ENV

// Use the icon anywhere in the app
fontawesome.library.add(faFacebook, faOdnoklassniki, faTwitch)

// Use the icon component anywhere in the app
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store,
  render: (createElement) => createElement(App)
}).$mount('#app')

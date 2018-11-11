import TestWidget from './components/TestWidget.vue'

// Register a custom component
// (works like 'Vue.component')
ClientAddonApi.component('org.vue.webpack.components.dashboard', TestWidget)

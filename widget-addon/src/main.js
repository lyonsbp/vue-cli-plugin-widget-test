import TestWidget from './components/TestWidget.vue'

// Register a custom component
// (works like 'Vue.component')
ClientAddonApi.component('test.widget.components.widget', TestWidget)

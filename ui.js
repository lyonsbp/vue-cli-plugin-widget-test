module.exports = api => {
  const { registerWidget, onAction, setSharedData } = api.namespace('org.vue.widgets.')
  api.addClientAddon({
    id: 'org.vue.webpack.client-addon',
    // Use the same port you configured earlier
    url: 'http://localhost:8042/index.js'
  })
  
}
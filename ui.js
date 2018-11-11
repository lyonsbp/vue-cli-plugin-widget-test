module.exports = api => {
  const { registerWidget, onAction, setSharedData } = api.namespace('org.vue.widgets.')
  api.addClientAddon({
    id: 'test.widget.plugin',
    // Use the same port you configured earlier
    url: 'http://localhost:8042/index.js'
  })

  registerWidget({
    // Unique ID
    id: 'test.widget.hello',
    // Basic infos
    title: 'test.widget.hello.title',
    description: 'test.widget.hello.description',
    icon: 'rss_feed',
    // Main component used to render the widget
    component: 'test.widget.components.widget',
    // Size
    minWidth: 2,
    minHeight: 1,
    maxWidth: 6,
    maxHeight: 6,
    defaultWidth: 2,
    defaultHeight: 3,
    // (Optional) Limit the maximum number of this widget on the dashboard
    maxCount: 3,
    // (Optional) Default configuration for the widget
    defaultConfig: () => ({
      message: 'test default values'
    })
  })
  
}
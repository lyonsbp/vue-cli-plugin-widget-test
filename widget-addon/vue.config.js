const { clientAddonConfig } = require('@vue/cli-ui')

module.exports = {
  ...clientAddonConfig({
    id: 'test.widget.plugin',
    // Development port (default 8042)
    port: 8042
  })
}
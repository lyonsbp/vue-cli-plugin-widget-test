<template>
  <div class="welcome">
    <div class="logo-wrapper">
      <ItemLogo
        image="/public/vue-logo.png"
        class="logo vuejs"
      />
    </div>
    <div class="emoji">👁</div>
    <div class="emoji">❤️</div>
    <vuetroit-logo></vuetroit-logo>    
    <div>
      <p>This is a sample hello world widget. I am just another vue component being displayed as a widget!</p>
    </div>
  </div>
</template>

<script>
import VuetroitLogo from './VuetroitLogo'
export default {
  inject: [
    'widget'
  ],
  components: {
    VuetroitLogo
  },
  created () {
    this.tipIcons = [
      'dashboard',
      'arrow_back',
      'home'
    ]
  }
}
</script>

<style scoped>
  .emoji {
    font-size: 5em;
    margin-left: 20%;
  }
</style>

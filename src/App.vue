<template>
  <div id="app">
    <nav-component></nav-component>
    <div class="main">
      <div class="columns is-mobile">
        <div class="column is-10 is-offset-1">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatFeed from './components/chat-feed'
import NavComponent from './components/nav'

export default {
  name: 'app',
  components: {
    NavComponent,
    ChatFeed
  },
  mounted: function () {
    document.cookie = 'very-important-cookie=important-info'
  }
}
</script>

<style scoped>
.main {
  padding-top:1em;
}
</style>

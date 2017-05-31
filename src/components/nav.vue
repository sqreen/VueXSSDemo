<template>
  <nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <router-link class="nav-item is-tab" exact to="/" active-class="is-active">The Basics</router-link>
      <router-link class="nav-item is-tab" to="/vux" active-class="is-active">Vux</router-link>
      <router-link class="nav-item is-tab" to="/view" active-class="is-active">Iview</router-link>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  name: 'nav',
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>
<style>
</style>

<template>
  <div>
    <transition-group
      name="custom-classes-transition"
      enter-active-class="animated-fast fadeInUp"
      leave-active-class="animated-fast fadeOutBottom"
    >
    <div v-for="(message,index) in messages" :key="index">
      <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{message.author}}
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <div v-html="message.text"></div>
    </div>
  </div>
</div>
      <br />
    </div>
      </transition-group>
  </div>
</template>
<script>
export default {
  name: 'chat-list-xss',
  props: ['messages'],
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>
<style>
  .animated-fast {
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }
</style>

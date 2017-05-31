<template>
  <div>
    <button class="button is-primary" @click="addMaliciousEntry(false)">Add Entry</button>
        <button class="button is-dark" @click="addMaliciousEntry(true)">Add Malicious Entry</button>
        <hr/>
    <br/>
    <div class="columns is-mobile">
      <div class="column is-4 sq-vux-bg">
        <Card v-for="(message, index ) in vuxMessages" :key="index" :header="message">
      </Card>
      </div>
      <div class="column">
        <div class="content">
          <h2>Vux UI Framework</h2>
          <p>Vux is UI a Framework based on vue with <a href="https://github.com/airyland/vux"> 7.5k stars</a> on Github</p>
          <p>It <a href="https://github.com/airyland/vux/search?utf8=%E2%9C%93&q=v-html&type=">currently</a> implements multiple time the v-html tag where it can possibly be user filled fields</p>
          <p>The component on the left is vux's <strong>Card</strong> component. Here we hijack the <strong>header</strong> field.</p>
        </div>
        <h1>What was sent :</h1>
        <div>{{currentMessage}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { generateRandomEntry } from '../utils/chat.utils'
  import { Card } from 'vux'
  export default {
    name: 'vux',
    data () {
      return {
        messages: [],
        header: {title: 'This is a header'},
        currentMessage: ''
      }
    },
    methods: {
      addMaliciousEntry: function (malicious) {
        const randomMessage = generateRandomEntry(malicious)
        this.messages.push(randomMessage)
        this.currentMessage = randomMessage
      }
    },
    computed: {
      vuxMessages: function () {
        return this.messages.map((message) => ({title: message.text}))
      }
    },
    components: {Card}
  }
</script>
<style>
  .sq-vux-bg {
    background: #e8e8e8;
  }
</style>

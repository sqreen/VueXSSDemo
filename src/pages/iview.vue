<template>
  <div>
    <div class="columns is-mobile">
      <div class="column is-4">
        <Button type="primary" @click="confirm">Click here for modal</Button>
      </div>
      <div class="column">
        <div class="content">
          <h2>Iview UI Framework</h2>
          <p>Iview is a UI Framework based on Vue with <a href="https://github.com/iview/iview"> 5k stars</a> on Github</p>
          <p>It <a href="https://github.com/iview/iview/search?utf8=%E2%9C%93&q=v-html&type=">currently</a> implements multiple time the v-html tag where it can possibly be user filled fields</p>
          <p>The component on the left is Iview's <strong>Confim Modal</strong> component. Here we hijack the <strong>Content</strong> field.</p>
        </div>
        <h1>What was sent :</h1>
        <div>{{currentMessage}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import Modal from 'iview/src/components/modal'
  import { generateRandomEntry } from '../utils/chat.utils'
  export default {
    name: 'iview',
    data () {
      return {
        modal1: false,
        currentMessage: null
      }
    },
    methods: {
      confirm () {
        const randomMessage = generateRandomEntry(true)
        this.currentMessage = randomMessage
        this.$Modal.confirm({
          title: randomMessage.author,
          content: randomMessage.text,
          onOk: () => {
            this.$Message.info('OK')
          },
          onCancel: () => {
            this.$Message.info('KO')
          }
        })
      }
    },
    computed: {},
    components: {Modal}
  }
</script>
<style>
</style>

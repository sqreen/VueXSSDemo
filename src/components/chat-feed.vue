<template>
    <div>
        <button  class="button is-primary" @click="addEntryToChat(false)">Add Entry</button>
        <button  class="button is-dark" @click="addEntryToChat(true)">Add Malicious Entry</button>
        <hr/>
      <br/>
        <div class="columns is-mobile">
          <div class="column is-4">
            <chat-xss :messages="messages"></chat-xss>
          </div>
          <div class="column">
            <div class="content">
            <h2>XSS Basics</h2>
            <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)" target="_blank" rel="noreferrer"> What is a XSS</a>
              <p>Injecting Raw Html is possible in the current frameworks. <br/>
                React uses <a href="https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml">dangerouslySetInnerHTML</a><br/>
                Angular uses <a href="https://angular.io/docs/ts/latest/guide/security.html#!#angular-s-cross-site-scripting-security-model">[innerHtml]</a><br/>
                Vue uses : <a href="https://vuejs.org/v2/guide/syntax.html#Raw-HTML">v-html</a>
              </p>
              <p>We will see how we can perform XSS in Vue and some possibles issues with current implementations.</p>
          </div>
            <h1>What was sent :</h1>
            <div>{{currentMessage}}</div>
          </div>
      </div>
  </div>
</template>
<script>
  import { generateRandomEntry, generateRandomEntries } from '../utils/chat.utils'
  import chatXss from './chat-list-xss'
  export default {
    name: 'chat-feed',
    data () {
      return {
        messages: generateRandomEntries(1),
        currentMessage: ''
      }
    },
    methods: {
      addEntryToChat: function (malicious) {
        const randomMessage = generateRandomEntry(malicious)
        this.messages.push(randomMessage)
        this.currentMessage = randomMessage
      }
    },
    components: {chatXss}
  }
</script>
<style>
</style>

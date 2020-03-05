<template>
  <div id="app">
    <div v-if="!ageSet">
      <datetime
        v-model="date"
        type="datetime"
        title="Select you birthdate and birthtime"
        hidden-name="Select you birthdate and birthtime"
        input-id='test'
        :class="darkMode ? 'dark' : 'light'"
      ></datetime>
      <button @click="setAge">Get AGE</button>
    </div>
    <agemodel v-if="ageSet" :date="date" :ageSet="ageSet" />
    <made-with-love by='Raj Kharvar' link='https://github.com/rajkharvar' />
  </div>
</template>

<script>
import { Datetime } from 'vue-datetime'
import AgeModel from '@/components/AgeModel'

import dom from '@/mixins/dom'

export default {
  mixins: [dom],
  name: 'App',
  components: {
    datetime: Datetime,
    agemodel: AgeModel
  },
  data () {
    return {
      date: null,
      ageSet: false,
      darkMode: window.matchMedia('(prefers-color-scheme:dark)').matches
    }
  },
  created () {
    if (window.localStorage.getItem('yourage')) {
      this.date = window.localStorage.getItem('yourage')
      this.ageSet = true
    }
  },
  updated () {
    this.addValue('vdatetime-input', 'Select Birthdate and Time')
  },
  methods: {
    setAge () {
      if (!this.date) {
        return
      }
      window.localStorage.setItem('yourage', this.date)
      this.ageSet = true
    }
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
#app {
  font-family: 'Fira Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="age-model">
    <vue-headful :title="title" />
    <div class="age-container">
      <h1>AGE</h1>
      <div class="test">
        <h1 class="age-whole">{{ ~~age }}</h1>
        <p class="age-decimal">
          {{ String((age % 1).toFixed(11)).substring(1) }}
        </p>
      </div>
      <!-- <div class="reset">
        <button @click="resetAge">Reset Age</button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['date', 'ageSet'],
  data () {
    return {
      birthDateTimestamp: 0,
      currentTimetamp: +new Date() / 1000,
      age: 0,
      fixedDeno: 3600 * 24 * 365 * 1000,
      testAge: 0,
      title: ''
    }
  },
  created () {
    this.birthDateTimestamp = +new Date(this.date)
    const self = this
    setInterval(function () {
      self.$data.currentTimetamp = +new Date()
      self.$data.age =
        (self.$data.currentTimetamp - self.$data.birthDateTimestamp) /
        self.$data.fixedDeno
      self.$data.age = Number(self.$data.age).toFixed(10)
      self.$data.title = `You are ${Math.floor(self.$data.age)} years old`
    }, 100)
  }
  // computed: {
  //   resetAge () {
  //     console.log(this.data)
  //     window.localStorage.removeItem('yourage')
  //     return this.ageSet = false
  //   }
  // }
}
</script>

<style lang="scss"></style>

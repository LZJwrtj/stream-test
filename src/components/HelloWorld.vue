<template>
  <div class="hello">
    <button id="btn">点击</button>
  </div>
</template>

<script>
  import {getData} from '../api/getData'
export default {
  data () {
  },
  created() {
    this._getData()
  },
  methods: {
    _getData() {
      getData().then(function (res) {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

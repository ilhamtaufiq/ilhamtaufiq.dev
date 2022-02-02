<template>
  <div id="app">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="pekerjaan in pekerjaans" :key="pekerjaan.id">
        {{ pekerjaan.nama_pekerjaan }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      pekerjaans: [],
      error: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/api/pekerjaans')
      this.pekerjaans = response.data.attributes
    } catch (error) {
      this.error = error;
    }
  }
}
</script>

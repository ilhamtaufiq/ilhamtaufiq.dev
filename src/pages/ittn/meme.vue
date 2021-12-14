<template>
  <div class="space-y-4 py-8">
    <div>
      <h1 class="text-2xl text-gray-900 dark:text-gray-100">Meme Hari Ini</h1>

      <p class="text-lg text-gray-700 dark:text-gray-300"></p>
    </div>
      <div>
        <img
          :src="`${meme}`"
          class="rounded center"
        />
      </div>
    <div class="flex flex-wrap space-x-2 center">
      <button title="Click to refresh the page"@click="$fetch">Refresh</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
button {
  @apply rounded cursor-pointer bg-gray-200 py-2 px-4 transition-colors text-gray-900 select-none dark:(bg-gray-700 text-gray-100 hover:bg-gray-800) hover:bg-gray-300 focus:outline-none ;
}
 .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
} 
</style>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
      meme: {},
      }
    },
      mounted() {
     if (!this.loaded) this.$fetch()
  },
    async fetch() {
      const { data } = await axios.get(
        `https://hadi-api.herokuapp.com/api/darkjokes`
      )
      // `todos` has to be declared in data()
      this.meme = data.result
      console.log(data.result);
    }
  }
</script>
<template>
  <div class="space-y-4 py-8">
    <div>
      <h1 class="text-2xl text-gray-900 dark:text-gray-100">Indonesia Twitter Trends Now...</h1>

      <p class="text-lg text-gray-700 dark:text-gray-300">🔥</p>
    </div>

    <div
      class="rounded space-y-4 bg-gray-200 p-4 items-center md:(flex space-y-0 space-x-4) dark:(bg-gray-800 text-gray-200) "
    >
      <div>
        <img
          :src="`https://cdn.dribbble.com/users/2816838/screenshots/8751099/media/e72af5acfdb44c234079dcfea3f12ced.png`"
          class="rounded md:h-50 md:w-50"
        />
      </div>

      <div class="space-y-4 whitespace-normal">
        <div class="flex flex-col">
          <h3 class="font-semibold text-gray-800 dark:text-gray-200">Trending: {{trends[0].time}}</h3>
        </div>
        <div class="flex flex-col">
          <h3 class="font-semibold text-gray-800 dark:text-gray-200"></h3>
              <div v-for="item in trends[0].data">
                <a style="color: white;" :href="`https://twitter.com/search?q=${item.name.replace('#','')}`">{{item.name}} - 🗣️{{item.tweet_count}}</a>
              </div>
          </div>
      </div>
    </div>
    <div class="flex flex-wrap space-x-2">
      <button title="Click to refresh the page"@click="$fetch">Refresh</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
button {
  @apply rounded cursor-pointer bg-gray-200 py-2 px-4 transition-colors text-gray-900 select-none dark:(bg-gray-700 text-gray-100 hover:bg-gray-800) hover:bg-gray-300 focus:outline-none ;
}
</style>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
      trends: {},
      }
    },
  mounted() {
     if (!this.loaded) this.$fetch()
  },
    async fetch() {
      const { data } = await axios.get(
        `https://api-twitter-trends.herokuapp.com/trends?location=indonesia`
      )
      // `todos` has to be declared in data()
      this.trends = data.data.trends
      console.log(data.data.trends[0].time);
    }
  }
</script>
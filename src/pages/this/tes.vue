<script lang="ts">
import Vue from "vue"
// Interface
interface Link {
  url: string
  title: string
  description: string
  icon: string
}
export default Vue.extend({
  head() {
    const title = "Contact"
    const description =
      "Need to get in touch with me? Have any questions? Want to join my Discord server? Click here!"
    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
      }),
    }
  },
  data() {
    return {
      pageLoaded: false,
    }
  },
  mounted() {
    this.pageLoaded = true
  },
  computed: {
    getLinks(): Link[] {
      const social = this.$config.social
      const titles = {
        discord: "Join my Discord server!",
        twitter: "Follow me on Twitter!",
        github: "Follow me on GitHub!",
        instagram: "Follow me on Instagram!",
        trello: "View my Trello board!",
      }
      const array: Link[] = []
      for (const item in social) {
        if (item === "email") continue
        array.push({
          // @ts-ignore-next-line
          url: social[item],
          title: item?.[0]?.toUpperCase() + item.slice(1),
          // @ts-ignore-next-line
          description: titles[item],
          icon: item,
        })
      }
      return array
    },
  },
})
</script>

<template>
  <div class="text-gray-500 dark:text-neutral-700">
    <header class="space-y-2 my-12">
      <h1 style="color: white;" class="text-gray-900 text-4xl dark:text-neutral-300">Playground</h1>
      <p>Fitur gabut</p>
    </header>

    <div class="grid gap-4 md:grid-cols-2">
      <a href="/ittn">Indonesia Twitter Trending</a>
      <a href="/ittn/gempa">Info Gempabumi</a>
      <a href="/ittn/meme">Meme Hari Ini</a>
    </div>
  </div>
</template>
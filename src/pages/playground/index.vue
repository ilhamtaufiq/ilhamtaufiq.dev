<template>
  <div class="text-gray-500 dark:text-neutral-700">
    <header class="space-y-2 my-12">
      <h1 style="color: white;" class="text-gray-900 text-4xl dark:text-neutral-300">{{title}}</h1>
      <p>{{subtitle}}</p>
    </header>

    <div class="grid gap-4 md:grid-cols-2">
      <a href="/playground/trends">Indonesia Twitter Trends Now</a>
      <a href="/playground/gempa">Info Gempabumi</a>
      <a href="/playground/meme">Meme Hari Ini</a>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title: 'Playground',
      subtitle: 'Tempat bermain API',
    }
    },
  head() {
    return {
    title: this.title,  
    meta: [
      {
        hid: 'playground',
        name: 'playground',
        content: 'Tempat bermain API'
      }
    ],
    }
  }
}
</script>

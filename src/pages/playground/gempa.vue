<template>
  <div class="space-y-4 py-8">
    <div>
      <h1 class="text-2xl text-gray-900 dark:text-gray-200">Informasi Gempabumi 📢</h1>
    </div>

    <div
      class="rounded space-y-4 bg-gray-200 p-4 items-center md:(flex space-y-0 space-x-4) dark:(bg-gray-800 text-gray-200) "
    >
      <div>
        <img
          :src="`${gempa.shakemap}`"
          class="rounded md:h-50 md:w-50"
        />
      </div>
      <div class="space-y-4 whitespace-normal">
        <div class="flex flex-col">
          <h3 class="font-semibold text-gray-800 dark:text-gray-200">Info Gempa</h3>
        </div>
        <div class="flex flex-col">
          <!-- <h3 class="font-semibold text-gray-800 dark:text-gray-200">Tanggal: {{gempa.tanggal}}</h3> -->
          <ul>
              <li v-for="(info, index) in gempa">
                  {{index}} : {{info}}
              </li>
          </ul>
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
      gempa: [],
      ls: null,
      bt: null,
      koordinat: null,
      center: null,
      circle: {
        radius: 10,
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
      },
      title: 'Info Gempabumi',
      }
    },
    head() {
    const title = "Info Gempabumi"
    const description = this.gempa.wilayah
    const image = this.gempa.shakemap

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        image,
        keywords: "gempabumi, bmkg, info",
        url: "https://ilhamtaufiq.dev/playground/gempa",
      }),
      link: [
        {
          rel: "canonical",
          href: `https://ilhamtaufiq.dev/playground/gempa`,
        },
      ],
    }
  },
  mounted() {
    if (!this.loaded) this.$fetch();
    this.ls = this.gempa.lintang.replace("LS",'').trim();  
    this.bt = this.gempa.bujur.replace("BT",'').trim();  
    this.koordinat = this.ls+","+this.bt;
    this.center = this.koordinat.split(",");
    },
    async fetch() {
      const { data } = await axios.get(
        `https://cuaca-gempa-rest-api.vercel.app/quake`
      )
      // `todos` has to be declared in data()
      this.gempa = data.data
      console.log(data.data);
    }
  }
</script>
<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    /**
     * Returns the selected color mode value.
     * @returns {string} The color mode as "light" or "dark".
     */
    getSelectedTheme(): string {
      return this.$colorMode.value
    },
  },
  methods: {
    /**
     * Updates the color mode value.
     */
    switchTheme() {
      this.$colorMode.preference =
        this.getSelectedTheme === "dark" ? "light" : "dark"
    },
  },
})
</script>

<template>
  <div
    class="rounded-full cursor-pointer bg-gray-100 p-2 transition-all text-gray-900 select-none dark:(bg-gray-800 text-gray-100) hover:(dark:bg-gray-100 dark:text-gray-900 light:bg-gray-800 text-gray-100 shadow-md) focus:outline-none "
    @click="switchTheme"
  >
    <IconSun v-if="getSelectedTheme === 'light'" class="h-5 w-5" />

    <IconMoon v-else class="h-5 w-5" />
  </div>
</template>

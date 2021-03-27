<template>
  <SkeletonLoader
    v-if="
      finished === false ||
      !getStatusDetails ||
      Object.keys(lanyard).length === 0
    "
    class="h-5"
  />

  <div
    v-else
    class="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
  >
    <div :class="`h-3 w-3 rounded-full flex-shrink-0 ${getDiscordStatus}`" />
    <div class="text-sm truncate" :title="getStatusDetails">
      {{ getStatusDetails }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finished: false,
      lanyard: {},
    }
  },
  computed: {
    /**
     * Returns status detail as string.
     * @returns {string}
     */
    getStatusDetails() {
      const filtered =
        this.lanyard?.activities?.filter(
          (activity) => activity.type !== 4
        )?.[0] || {}

      // Offline
      if (this.lanyard?.discord_status === "offline") return "Offline"
      // Visual Studio Code
      else if (filtered.name === "Visual Studio Code") {
        const replaced = filtered.state?.replace("📁 ", "") || "a file"
        return `Editing ${replaced} in Visual Studio Code`
      }
      // YouTube Music
      else if (
        filtered.name === "YouTube Music" &&
        filtered.details &&
        filtered.state
      ) {
        const song = filtered.details || "something"
        return `Listening to ${song} on YouTube Music`
      }
      // YouTube
      else if (
        filtered.name === "YouTube" &&
        filtered.details &&
        filtered.state
      ) {
        const name = filtered.details || "a video"
        return `Watching ${name} on YouTube`
      }
      // Default values
      else
        switch (filtered.name) {
          case "Google Meet":
            return "In a Google Meet meeting"
          case "Twitch":
            return "Watching a stream on Twitch"
          case "Prime Video":
            return "Watching something on Prime Video"
          default:
            return "Online"
        }
    },
    /**
     * Returns Discord status colors.
     * @returns {string} Tailwind color classes
     */
    getDiscordStatus() {
      switch (this.lanyard.discord_status) {
        case "online":
          return "bg-green-500"
        case "idle":
          return "bg-yellow-500"
        case "dnd":
          return "bg-red-500"
        default:
          return "bg-gray-500 dark:bg-gray-200"
      }
    },
  },
  mounted() {
    /**
     * Connect to Lanyard Socket API, send heartbeat every 30 seconds and replace the Vue data value with the message
     */
    const socket = new WebSocket("wss://api.lanyard.rest/socket")

    socket.addEventListener("open", () => {
      // Subscribe to ID
      socket.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_ids: ["162969778699501569"],
          },
        })
      )

      // Send heartbeat every 30 seconds
      setInterval(() => {
        socket.send(
          JSON.stringify({
            op: 3,
          })
        )
      }, 30000)
    })

    socket.addEventListener("message", ({ data }) => {
      const { t: type, d: status } = JSON.parse(data)

      if (type === "INIT_STATE")
        this.lanyard = status?.["162969778699501569"] || {}
      else if (type === "PRESENCE_UPDATE") this.lanyard = status || {}

      this.finished = true
    })
  },
}
</script>
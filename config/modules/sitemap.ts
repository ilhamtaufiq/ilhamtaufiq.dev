export default async function () {
  const { $content } = require("@nuxt/content")
  const posts = await $content().fetch()

  const routes = []
  for (const post of posts) {
    routes.push(`blog/artikel/${post.slug}`)
  }

  return {
    hostname: "https://www.ilhamtaufiq.dev",
    gzip: true,
    routes,
  }
}

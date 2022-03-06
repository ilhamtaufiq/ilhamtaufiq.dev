const Feed = () => {
  const baseUrlArticles = "https://ilhamtaufiq.dev/blog"

  const feedFormats = {
    rss: { type: "rss2", file: "rss.xml" },
    json: { type: "json1", file: "feed.json" },
  }

  const { $content } = require("@nuxt/content")

  const createFeedArticles = async function (feed: any) {
    feed.options = {
      title: "Ilhams's Blog",
      description:
        "Ilham's Personal Blog",
      link: baseUrlArticles,
    }

    const articles = await $content().fetch()

    articles.forEach((article: any) => {
      const url = `${baseUrlArticles}/post/${article.slug}`
      const postImagesPath = "https://ilhamtaufiq.dev/assets/images/posts"

      feed.addItem({
        title: article.title,
        slug: article.slug,
        link: url,
        date: new Date(article.createdAt),
        description: article.description,
        content: article.summary,
      })
    })
  }

  return Object.values(feedFormats).map(({ file, type }) => ({
    path: `${file}`,
    type: type,
    create: createFeedArticles,
  }))
}

export default Feed

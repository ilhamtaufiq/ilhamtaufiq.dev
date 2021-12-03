const Feed = () => {
  const baseUrlArticles = "https://ilham-rocks.vercel.app/blog"

  const feedFormats = {
    rss: { type: "rss2", file: "rss.xml" },
    json: { type: "json1", file: "feed.json" },
  }

  const { $content } = require("@nuxt/content")

  const createFeedArticles = async function (feed: any) {
    feed.options = {
      title: "Ilhams's Blog",
      description:
        "Ilham's Personal",
      link: baseUrlArticles,
    }

    const articles = await $content().fetch()

    articles.forEach((article: any) => {
      const url = `${baseUrlArticles}/artikel/${article.slug}`
      const postImagesPath = "https://ilham-rocks.vercel.app/assets/images/posts"

      feed.addItem({
        title: article.title,
        slug: article.slug,
        link: url,
        image: article.image
          ? `${postImagesPath}/${article.image}`
          : `${postImagesPath}/${url?.split("/")?.at(-1)}.jpg`,
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

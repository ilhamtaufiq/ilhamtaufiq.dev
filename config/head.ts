import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "https://ilham-rocks.vercel.app/icon.png"
const description =
  "Ilham's Blog"

const Head: NuxtOptionsHead = {
  title: "ilham-rocks.vercel.app",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@ilhamtopiq",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@ilhamtopiq",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "ilham-rocks.vercel.app",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "ilham-rocks.vercel.app",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: image,
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#111827",
    },
  ].map((i) => {
    // @ts-ignore-next-line
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "https://ilham-rocks.vercel.app/assets/icons/icon.ico",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Ilham's Blog",
      href: "https://ilham-rocks.vercel.app/opensearch.xml",
    },
  ],
}

export default Head

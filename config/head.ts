import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "https://ilhamtaufiq.dev/icon.png"
const description =
  "Ilham's Blog"

const Head: NuxtOptionsHead = {
  title: "Ilham",
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
      content: "ilhamtaufiq.dev",
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
      content: "ilhamtaufiq.dev",
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
      href: "https://ilhamtaufiq.dev/assets/icons/icon.ico",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Ilham's Blog",
      href: "https://ilhamtaufiq.dev/opensearch.xml",
    },
  ],
}

export default Head

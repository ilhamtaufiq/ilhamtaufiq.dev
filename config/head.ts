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
    // apple
    { rel:'apple-touch-icon', sizes:'180x180', href:'/src/static/apple-icon-180.png' },
    { rel:'apple-touch-icon', sizes:'167x167', href:'/src/static/apple-icon-167.png' },
    { rel:'apple-touch-icon', sizes:'152x152', href:'/src/static/apple-icon-152.png' },
    { rel:'apple-touch-icon', sizes:'120x120', href:'/src/static/apple-icon-120.png' },
    {
    rel:'apple-touch-startup-image', href:'/src/static/apple-splash-2048-2732.png',
    media:'(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
    },
    {
    rel:'apple-touch-startup-image', href:'/src/static/apple-splash-1136-640.png',
    media:'(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
    },

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

declare module "@nuxt/types/config/runtime" {
  interface NuxtRuntimeConfig {
    social: Social
    sponsor: Sponsor
    links: Links
  }
}

/* Interfaces */
export interface Sponsor {
  patreon: string
}

export interface Social {
  discord: string
  twitter: string
  github: string
  instagram: string
  trello: string
  email: string
}
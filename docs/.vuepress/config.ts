import { defineUserConfig } from "@vuepress/cli";
import theme from "./theme.js";

const base = <"/" | `/${string}/`>process.env.BASE || "/";

export default defineUserConfig({
  base,

  dest: "./dist",

  locales: {
    /** 
    "/en": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },*/
    "/": {
      lang: "zh-CN",
      title: "朱语",
      description: "《朱语》是一部收集了朱老师名言的一本书，无论是在物理学还是哲学上都会给人很大的启发，引人深思，耐人回味。",
    },
  },

  theme,

  shouldPrefetch: false,
});

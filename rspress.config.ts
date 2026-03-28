import * as path from "node:path";
import { defineConfig } from "@rspress/core";
import { pluginAlgolia } from "@rspress/plugin-algolia";
import { pluginLlms } from "@rspress/plugin-llms";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FaTwitch, FaHackerrank, FaReddit } from "react-icons/fa6";
import { SiHackthebox, SiTryhackme, SiCodeberg } from "react-icons/si";
import { pluginBlogList } from "rspress-plugin-blog-list";

const redditSvg = renderToStaticMarkup(createElement(FaReddit));
const twitchSvg = renderToStaticMarkup(createElement(FaTwitch));
const hackerrankSvg = renderToStaticMarkup(createElement(FaHackerrank));
const hacktheboxSvg = renderToStaticMarkup(createElement(SiHackthebox));
const tryhackmeSvg = renderToStaticMarkup(createElement(SiTryhackme));
const codebergSvg = renderToStaticMarkup(createElement(SiCodeberg));

export default defineConfig({
  root: path.join(__dirname, "docs"),
  globalStyles: path.join(__dirname, "tailwind.css"),
  plugins: [pluginLlms(), pluginAlgolia(), pluginBlogList()],

  title: "Jacob-Valor",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    llmsUI: true,
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
      {
        icon: { svg: codebergSvg },
        mode: "link",
        content: "https://codeberg.org/",
      },
      {
        icon: "x",
        mode: "link",
        content: "https://twitter.com/",
      },
      {
        icon: "discord",
        mode: "link",
        content: "https://instagram.com/",
      },
      {
        icon: "youtube",
        mode: "link",
        content: "https://facebook.com/",
      },
      {
        icon: { svg: twitchSvg },
        mode: "link",
        content: "https://twitch.tv/",
      },
      {
        icon: { svg: redditSvg },
        mode: "link",
        content: "https://reddit.com/",
      },
      {
        icon: { svg: hackerrankSvg },
        mode: "link",
        content: "https://hackerrank.com/",
      },
      {
        icon: { svg: hacktheboxSvg },
        mode: "link",
        content: "https://app.hackthebox.com/profile/...",
      },
      {
        icon: { svg: tryhackmeSvg },
        mode: "link",
        content: "https://tryhackme.com/",
      },
    ],
  },
});

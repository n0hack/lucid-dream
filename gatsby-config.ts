import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Lucid Dream`,
    description: `갇혀만 있던 상상을 현실로 만드는 멀티 크리에이터 NoHack의 블로그 ⭐️`,
    author: `Jihun Jeon(NoHack)`,
    siteUrl: `https://www.lucid-dream.net`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/contents/assets`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};

export default config;

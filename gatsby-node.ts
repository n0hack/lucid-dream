import { GatsbyNode } from "gatsby";
import path from "path";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        "@lucid-components/*": path.resolve(__dirname, "./components/*"),
        "@lucid-hooks/*": path.resolve(__dirname, "./hooks/*"),
        "@lucid-utils/*": path.resolve(__dirname, "./utils/*"),
        "@lucid-types/*": path.resolve(__dirname, "./types/*"),
      },
    },
  });
};

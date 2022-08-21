import { GatsbyNode } from "gatsby";
import path from "path";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        "@lucid-components": path.resolve(__dirname, "src/components"),
        "@lucid-hooks": path.resolve(__dirname, "src/hooks"),
        "@lucid-utils": path.resolve(__dirname, "src/utils"),
        "@lucid-types": path.resolve(__dirname, "src/types"),
        "@lucid-ui": path.resolve(__dirname, "src/components/ui"),
        "@lucid-state": path.resolve(__dirname, "src/recoil"),
      },
    },
  });
};

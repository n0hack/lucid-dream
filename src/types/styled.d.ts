import "styled-components";
import { ColorsType } from "@lucid-ui/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}

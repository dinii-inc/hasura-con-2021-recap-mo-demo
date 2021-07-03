import "styled-components";
import { Theme } from "@material-ui/core";

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}

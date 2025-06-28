// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme as MuiTheme, ThemeOptions as MuiThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      principleCircle: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      principleCircle?: string;
    };
  }
}

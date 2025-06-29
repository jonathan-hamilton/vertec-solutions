import { SxProps } from "@mui/system";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      principleCircle: string;
      heroSectionOuterBoxSx?: SxProps<Theme>;
      heroSectionInnerBoxSx?: SxProps<Theme>;
      appBarSx?: SxProps<Theme>;
      toolbarSx?: SxProps<Theme>;
      brandButtonSx?: SxProps<Theme>;
      footerOuterBoxSx?: SxProps<Theme>;
      footerTitleSx?: (theme: Theme) => SxProps<Theme>;
      ctaOuterBoxSx?: SxProps<Theme>;
      ctaInnerBoxSx?: SxProps<Theme>;
      contactBackgroundBoxSx?: SxProps<Theme>;
    };
  } 
  interface ThemeOptions {
    custom?: {
      principleCircle?: string;
      heroSectionOuterBoxSx?: SxProps<Theme>;
      heroSectionInnerBoxSx?: SxProps<Theme>;
      appBarSx?: SxProps<Theme>;
      toolbarSx?: SxProps<Theme>;
      brandButtonSx?: SxProps<Theme>;
      footerOuterBoxSx?: SxProps<Theme>;
      footerTitleSx?: (theme: Theme) => SxProps<Theme>;
      ctaOuterBoxSx?: SxProps<Theme>;
      ctaInnerBoxSx?: SxProps<Theme>;
      contactBackgroundBoxSx?: SxProps<Theme>;
    };
  }
}
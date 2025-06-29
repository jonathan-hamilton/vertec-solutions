import { SxProps } from "@mui/system";

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      principleCircle?: string;
      appBarSx?: SxProps<Theme>;
      toolbarSx?: SxProps<Theme>;
      brandButtonSx?: SxProps<Theme>;
      footerOuterBoxSx?: SxProps<Theme>;
      footerTitleSx?: (theme: Theme) => SxProps<Theme>;
      ctaOuterBoxSx?: SxProps<Theme>;
      ctaInnerBoxSx?: SxProps<Theme>;
      contactBackgroundBoxSx?: SxProps<Theme>;
      heroSectionOuterBoxSx?: SxProps<Theme>;
      heroSectionInnerBoxSx?: SxProps<Theme>;
      principlesSectionOuterBoxSx?: SxProps<Theme>;
      principlesSectionCentralTitleBoxSx?: SxProps<Theme>;
      principlesSectionToolTipBoxBoxSx?: SxProps<Theme>;
      principlesTipBoxBoxSx?: SxProps<Theme>;
      scrollMenuIconSx?: SxProps<Theme>;
      serviceSpectrumOuterBoxSx?: SxProps<Theme>;
      serviceSpectrumHeaderBoxSx?: SxProps<Theme>;
      serviceSpectrumHeaderTypographyBoxSx?: SxProps<Theme>;
      serviceSpectrumHeaderDescriptionBoxSx?: SxProps<Theme>;
      serviceSpectrumPopoutPanelBoxSx?: SxProps<Theme>;
      serviceSpectrumPopoutDescriptionPopoverSx?: SxProps<Theme>;
      serviceSpectrumPopoutOuterBoxSx?: SxProps<Theme>;
      serviceSpectrumPopoutTypographySx?: SxProps<Theme>;
      workSectionOuterTypographyOuterBoxSx?: SxProps<Theme>;
      workSectionOuterBoxSx?: SxProps<Theme>;
      workSectionPaperSx?: SxProps<Theme>;
      workSectionUrlBoxSx?: SxProps<Theme>;
    };
  }
  interface ThemeOptions {
    custom?: {
      principleCircle?: string;
      appBarSx?: SxProps<Theme>;
      toolbarSx?: SxProps<Theme>;
      brandButtonSx?: SxProps<Theme>;
      footerOuterBoxSx?: SxProps<Theme>;
      footerTitleSx?: (theme: Theme) => SxProps<Theme>;
      ctaOuterBoxSx?: SxProps<Theme>;
      ctaInnerBoxSx?: SxProps<Theme>;
      contactBackgroundBoxSx?: SxProps<Theme>;
      heroSectionOuterBoxSx?: SxProps<Theme>;
      heroSectionInnerBoxSx?: SxProps<Theme>;
      principlesSectionOuterBoxSx?: SxProps<Theme>;
      principlesSectionCentralTitleBoxSx  ?: SxProps<Theme>;
      principlesSectionToolTipBoxBoxSx?: SxProps<Theme>;
      principlesTipBoxBoxSx?: SxProps<Theme>;
      scrollMenuIconSx?: SxProps<Theme>;
      serviceSpectrumOuterBoxSx?: SxProps<Theme>;
      serviceSpectrumHeaderBoxSx?: SxProps<Theme>;
      serviceSpectrumHeaderTypographyBoxSx?: SxProps<Theme>;
      serviceSpectrumHeaderDescriptionBoxSx?: SxProps<Theme>;
      serviceSpectrumPopoutPanelBoxSx?: SxProps<Theme>;
      serviceSpectrumPopoutDescriptionPopoverSx?: SxProps<Theme>;
      serviceSpectrumPopoutOuterBoxSx?: SxProps<Theme>;
      serviceSpectrumPopoutTypographySx?: SxProps<Theme>;
      workSectionOuterTypographyOuterBoxSx?: SxProps<Theme>;
      workSectionOuterBoxSx?: SxProps<Theme>;
      workSectionPaperSx?: SxProps<Theme>;
      workSectionUrlBoxSx?: SxProps<Theme>;
    };
  }
}
import { createTheme } from "@mui/material";
import overrides from './styles/overrides';

// Main theme configuration using MUI's createTheme.
// All custom sx objects are placed under the `custom` property for easy access via theme.custom in your components.

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#dcdcdc',
      paper: 'black',
    },
    text: {
      primary: '#ffffff',
      secondary: 'black',
    },
    primary: {
      main: '#1a73e8',
    },
    secondary: {
      main: '#e91e63',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      fontFamily: 'Roboto", "Helvetica", "Arial',
    },
  },
  components: overrides,

  // ---- Custom sx objects for use throughout the app ----
  custom: {
    // General/Branding
    principleCircle: 'green',

    // Header
    appBarSx: {
      bgcolor: "background.default",
      color: "text.secondary",
      zIndex: 10,
      position: "relative",
    },
    toolbarSx: {
      justifyContent: "space-between",
    },
    brandButtonSx: {
      textTransform: "none",
      fontSize: "1.25rem",
      fontWeight: 500,
    },

    // Footer
    footerOuterBoxSx: {
      bgcolor: "grey.100",
      py: 6,
      position: "relative",
      zIndex: 10,
    },
    footerTitleSx: (theme: any) => ({
      color: theme.palette.text.secondary,
    }),

    // CTA Section
    ctaOuterBoxSx: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      py: { xs: 10, md: 14 },
      textAlign: "center",
    },
    ctaInnerBoxSx: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      py: { xs: 10, md: 14 },
      px: 2,
    },

    // Contact Section
    contactBackgroundBoxSx: {
      width: "120%",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      borderRadius: 4,
      p: { xs: 2.4, md: 4.8 },
    },

    // Hero Section
    heroSectionOuterBoxSx: {
      minHeight: "70vh",
      height: "60vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      mb: 20,
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 0,      
      },
    },
    heroSectionInnerBoxSx: {
      position: "relative",
      zIndex: 1,
      textAlign: "center",
      px: 2,
    },

    // Principles Section
    principlesSectionOuterBoxSx: {
      position: "relative",
      width: 500,
      height: 500,
      mx: "auto",
      my: 10,
    },
    principlesSectionCentralTitleBoxSx: {
      borderRadius: "50%",      
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      textAlign: "center",
      p: 4,
    },
    principlesSectionToolTipBoxBoxSx: {
      position: "absolute",
      transform: "translate(-50%, -50%)",
      background: "black",
      color: "#fff",
      borderRadius: "50%",
      width: "clamp(60px, 12vw, 90px)",
      height: "clamp(60px, 12vw, 90px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "clamp(24px, 3vw, 40px)",
      cursor: "pointer",
      zIndex: 1,
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translate(-50%, -50%) scale(1.1)",
      },
    },
    principlesTipBoxBoxSx: {
      backgroundColor: "rgba(33, 33, 33, 0.9)",
      color: "#fff",
      px: 2,
      py: 1.5,
      borderRadius: 2,
      maxWidth: 250,
      boxShadow: 3,
    },  

    // Miscellaneous
    scrollMenuIconSx: {
      width: 54,
      height: 54,
      backgroundColor: "white",
      boxShadow: 3,
      "&:hover": { backgroundColor: "#f0f0f0" },       
    },

    // Service Spectrum Section
    serviceSpectrumOuterBoxSx: (theme: any) => ({
      backgroundColor: theme.palette.background.paper,
      color: "white",
      py: 10,
      px: { xs: 4, md: 2 },    
    }), 
    serviceSpectrumHeaderBoxSx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      px: 8,
      pb: 6,     
    },  
    serviceSpectrumHeaderTypographyBoxSx: {
      fontWeight: "bold", 
      color: "text.primary" 
    },     
    serviceSpectrumHeaderDescriptionBoxSx: {
      maxWidth: 500,
      textAlign: "left",
      color: "grey.500",
      mt: { xs: 13, md: 7 },
    },   
    serviceSpectrumPopoutPanelBoxSx: {
      backgroundColor: "#111",
      border: "1px solid grey",
      mb: 2,
      px: 3,
      py: 2,
      borderRadius: 1,
      position: "relative",
      cursor: "pointer", 
    },      
    serviceSpectrumPopoutDescriptionPopoverSx: {
      backgroundColor: "#5c5c5c",
      border: "1px solid #444",
      color: "#fff",
      px: 2,
      py: 1.5,
      borderRadius: 2,
      maxWidth: 700,
      boxShadow: 3,
    },      
    serviceSpectrumPopoutOuterBoxSx: {
      backgroundColor: "#1c1c1c",
      border: "1px solid #444",
      borderRadius: "8px",
      p: 3,
    },
    serviceSpectrumPopoutTypographySx: {
      color: "grey.300",
      whiteSpace: "pre-line",
      mt: 2,
      fontSize: "0.875rem",
    },    

    // Work Section
    workSectionOuterTypographyOuterBoxSx: {
      fontWeight: "bold", 
      color: "text.primary"
    },        
    workSectionOuterBoxSx: {
      display: "grid",
      gap: 4,
      gridTemplateColumns: {
        xs: "1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr 1fr",
      },
      mt: 4,
    },   
    workSectionPaperSx: {
      overflow: "hidden",
      borderRadius: 2,
      bgcolor: "grey.900",
    },     
    workSectionUrlBoxSx: {
      display: "block",
      height: 240,
      backgroundSize: "cover",
      backgroundPosition: "top",
    },                   
  }
  // ---- End custom sx objects ----
});

export default theme;

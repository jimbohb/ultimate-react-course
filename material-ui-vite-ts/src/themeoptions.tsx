import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/Card" {
  interface CardPropsVariantOverrides {
    neu: true;
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },
  components: {
    MuiCard: {
      variants: [
        {
          props: { variant: "neu" },
          style: {
            backgroundColor: "lightgray",
            borderRadius: "16px",
            boxShadow: "4px 4px 8px #b3b3b3, -4px -4px 8px #ffffff",
            // Add additional styles as needed
          },
        },
      ],
    },
  },
};

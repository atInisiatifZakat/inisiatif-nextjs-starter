import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize,
} from "@chakra-ui/react";
import { theme as baseTheme } from "@saas-ui/theme";

const theme = extendTheme(
  baseTheme,
  {
    fonts: {
      heading: "var(--font-inter)",
      body: "var(--font-inter)",
    },
    colors: {
      stale: {
        50: "#f1f5f9",
        100: "#e2e8f0",
        200: "#cbd5e1",
        300: "#94a3b8",
        400: "#64748b",
        500: "#1e293b",
        600: "#0d1219",
        700: "#040608",
        800: "#000000",
        900: "#000000",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "stale" }),
  withDefaultSize({
    size: "md",
    components: ["Button"],
  })
);

export default theme;

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export const toolboxTheme = extendTheme({
  colors: {
    qut: {
      50: "#def4ff",
      100: "#b0dbff",
      200: "#80c3ff",
      300: "#50abfe",
      400: "#2693fc",
      500: "#147ae4",
      600: "#085fb2",
      700: "#004480",
      800: "#00294f",
      900: "#000f1f",
    },
    huggingface: {
      50: "#fffada",
      100: "#fff0ad",
      200: "#ffe57d",
      300: "#ffdb4b",
      400: "#ffd11a",
      500: "#e6b800",
      600: "#b38f00",
      700: "#806600",
      800: "#4e3d00",
      900: "#1d1400",
    },
  },
});

export default function Root({ children }) {
  return (
    <ChakraProvider resetCSS={true} theme={toolboxTheme}>
      <>{children}</>
    </ChakraProvider>
  );
}

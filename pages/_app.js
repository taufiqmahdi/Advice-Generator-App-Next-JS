import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";

const colors = {
  primary: {
    lightCyan: "hsl(193, 38%, 86%)",
    neonGreen: "hsl(150, 100%, 66%)",
  },
  neutral: {
    grayishBlue: "hsl(217, 19%, 38%)",
    darkGrayishBlue: "hsl(217, 19%, 24%)",
    darkBlue: "hsl(218, 23%, 16%)",
  },
};

const breakpoints = {
  mobile: '375px',
  desktop: '1440px'
}

const theme = extendTheme({ breakpoints, colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
import { ReactElement, ReactNode } from "react";
import { AppLayout } from "~/components/layout";
import theme from "~/theme";

const inter = Inter({ subsets: ["latin"] });

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider
        theme={theme}
        toastOptions={{
          defaultOptions: {
            isClosable: true,
            variant: "subtle",
            position: "top-right",
          },
        }}
      >
        {Component.getLayout ? (
          Component.getLayout(<Component {...pageProps} />)
        ) : (
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        )}
      </ChakraProvider>
    </>
  );
}

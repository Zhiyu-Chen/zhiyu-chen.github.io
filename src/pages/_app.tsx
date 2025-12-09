import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import RobotCursor from "@/components/RobotCursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-81JL9108VP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-81JL9108VP');
        `}
      </Script>
      <RobotCursor />
      <Component {...pageProps} />
    </>
  );
}

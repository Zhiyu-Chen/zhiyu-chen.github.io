import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Geist, Source_Serif_4 } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif-display",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geist.variable} ${serif.variable}`}>
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
      <Component {...pageProps} />
    </div>
  );
}

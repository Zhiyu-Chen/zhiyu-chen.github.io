import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Inter, Newsreader } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif-display",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${newsreader.variable}`}>
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

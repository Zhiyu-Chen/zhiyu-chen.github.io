import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RobotCursor from "@/components/RobotCursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RobotCursor />
      <Component {...pageProps} />
    </>
  );
}

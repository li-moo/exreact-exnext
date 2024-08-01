import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayMain from "../component/layout/LayMain"
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LayMain />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
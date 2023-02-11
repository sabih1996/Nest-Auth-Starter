import "@/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider, ToastContainer } from "react-bootstrap";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SSRProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

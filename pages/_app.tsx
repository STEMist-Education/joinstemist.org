import "../styles/index.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import NProgress from "nprogress";
import ReactGA from "react-ga";
// import "nprogress/nprogress.css";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    if (
      process.env.ANALYTICS_ID &&
      process.env.NODE_ENV === "production" &&
      window.location.hostname === "www.joinstemist.org"
    ) {
      ReactGA.initialize(process.env.ANALYTICS_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  });

  useEffect(() => {
    router.events.on("routeChangeStart", NProgress.start);
    router.events.on("routeChangeComplete", NProgress.done);
    router.events.on("routeChangeError", NProgress.done);
    return () => {
      router.events.off("routeChangeStart", NProgress.start);
      router.events.off("routeChangeComplete", NProgress.done);
      router.events.off("routeChangeError", NProgress.done);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default MyApp;

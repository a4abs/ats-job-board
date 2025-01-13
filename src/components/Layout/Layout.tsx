import { ReactNode } from "react";
import Head from "next/head";

import Navigation from "@/components/Navbars";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
  description?: string;
  title?: string;
  job?: any;
}

export default function Layout(props: Readonly<LayoutProps>) {
  const {
    children,
    title = "Job Board - Powered By HireXL",
    description = "HireXL Job board ",
  } = props;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation transparent light />
      <main style={{ minHeight: "90vh" }}>{children}</main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import ReactQueryWrapper from "@/layouts/default/layout";
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Booking - Multipurpose Online Booking Theme",
  description: "Booking - Multipurpose Online Booking Theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        {/* <!-- Favicon --> */}
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        {/* <!-- Google Font --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="data-bs-theme">
            <ReactQueryWrapper>{children}</ReactQueryWrapper>
          </ThemeProvider>
          <Script
            strategy="beforeInteractive"
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          ></Script>
          <Script
            strategy="lazyOnload"
            src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js"
          ></Script>
          <Script
            strategy="lazyOnload"
            src="https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.0.9/glightbox.min.js"
          ></Script>
          <Script
            strategy="lazyOnload"
            src="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.js"
          ></Script>
          <Script
            strategy="lazyOnload"
            src="https://cdnjs.cloudflare.com/ajax/libs/choices.js/10.1.0/choices.min.js"
          ></Script>
          {/* <Script
            strategy="lazyOnload"
            src="/assets/js/functions.js"
          ></Script> */}
        </body>
      </html>
    </>
  );
}
